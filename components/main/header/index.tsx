import React from "react";
import styles from './index.module.scss'
import menubar from 'assets/svgs/menu.svg';
import x from 'assets/svgs/x.svg';
import Image from "next/image";

const Header: React.FC = () => {
  const [menu, setMenu] = React.useState<boolean>(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  const outRef: any = React.useRef();

  function handleOut(e: any) {
    if (outRef && outRef.current) {
      const ref: any = outRef.current;
      if (!ref.contains(e.target)) {
        setMenu(false);
      }
    }
  }

  React.useEffect(() => {
    document.addEventListener('click', handleOut);
    return () => document.removeEventListener('click', handleOut);
  }, []);
  
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <p className={styles.title}>Qrker</p>
        </div>
        <div className={styles.right}>
          <div className={styles.menu} ref={outRef}>
            <button onClick={handleMenu}>
              {menu ? <Image src={x} width={24} height={24} alt="X" /> : <Image src={menubar} width={24} height={24} alt="menu" />}
            </button>
            {menu && (
              <div className={styles.drop}>
                <a className={styles.item}>Support Qrker</a>
                <p className={styles.item}>V 1.0</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;