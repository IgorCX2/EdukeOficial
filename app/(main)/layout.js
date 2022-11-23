import '../../global.css'
import Container from '../container';
import NavBar from '../nav-link';
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
          <title>Em Beta</title>
        </head>
        <body className="overflow-x-hidden">
          <Container>
            <NavBar/>
          </Container>
          {children}
        </body>
      </html>
    );
}