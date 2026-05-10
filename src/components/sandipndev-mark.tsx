export function SandipndevMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 512 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M448 64H320V192H448V256H256V0H448V64ZM512 192H448V64H512V192Z M64 0H193V64H64V0Z M64 64H0V176H128V256H193V112H64V64ZM80 224H0V256H80V224Z"
      />
    </svg>
  );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M448 64H320V192H448V256H256V0H448V64ZM512 192H448V64H512V192Z M64 0H193V64H64V0Z M64 64H0V176H128V256H193V112H64V64ZM80 224H0V256H80V224Z"/></svg>`;
}
