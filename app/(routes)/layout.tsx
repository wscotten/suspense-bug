import '../globals.css';

export default function Layout({ component1, component2 }: any) {
  return (
    <html lang="en">
      <body>
        {component1}
        {component2}
      </body>
    </html>
  );
}
