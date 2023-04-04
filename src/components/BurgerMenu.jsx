import { useState } from "react"; 
import { IconMenu2 } from '@tabler/icons-react';
import { Link } from "react-router-dom";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className=" space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <IconMenu2 />
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
                <IconMenu2 />
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/" onClick={() => setIsNavOpen(false)}>Inicio</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/balance" onClick={() => setIsNavOpen(false)}>Saldo BIP/TNE</Link>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <Link to="/contacto" onClick={() => setIsNavOpen(false)}>Contacto</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/balance">Saldo BIP/TNE</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}