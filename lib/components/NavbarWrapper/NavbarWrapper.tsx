import styles from "./NavbarWrapper.module.css";
import { useEffect, useState } from "react";

export function NavbarWrapper(props: any) {
  const [hideNavbar, setHideNavbar] = useState<boolean>(false);

  const [scrollValue, setscrollValue] = useState<{
    currentY: number;
    previousY: number;
  }>({ currentY: 0, previousY: 0 });

  const onScroll = () => {
    setscrollValue((prev) => {
      return {
        currentY: window.scrollY,
        previousY: prev.currentY,
      };
    });
  };

  useEffect(() => {
    // update scroll values
    onScroll();

    //   add event listener for scroll
    window.addEventListener("scroll", onScroll);

    // event listener cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (
      scrollValue.currentY > 150 &&
      scrollValue.currentY > scrollValue.previousY
    ) {
      setHideNavbar(true);
    } else if (
      scrollValue.currentY < 100 ||
      scrollValue.previousY - scrollValue.currentY > 3
    ) {
      setHideNavbar(false);
    }
  }, [scrollValue.currentY, scrollValue.previousY]);

  return (
    <div
      className={`${styles.NavbarWrapper} ${hideNavbar && styles.HiddenNavbar}`}
    >
      {props.children}
    </div>
  );
}
