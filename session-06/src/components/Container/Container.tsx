interface IProps {
  children: React.ReactNode;
}

export default function Container({ children }: IProps) {
  return <div className="mx-50">{children}</div>;
}
