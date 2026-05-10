{
  description = "sandipan.dev";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = {
    self,
    nixpkgs,
    flake-utils,
  }:
    flake-utils.lib.eachDefaultSystem
    (system: let
      overlays = [
        (self: super: {
          nodejs = super.nodejs_22;
          pnpm = super.pnpm;
        })
      ];
      pkgs = import nixpkgs {
        inherit system overlays;
      };
      nativeBuildInputs = with pkgs;
        [
          alejandra
          nodejs
          pnpm
        ];
    in
      with pkgs; {
        devShells.default = mkShell {
            inherit nativeBuildInputs;
          };

        formatter = alejandra;
      });
}
