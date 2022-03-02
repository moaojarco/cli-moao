import { useState } from "react";
    import styles from "./Header.module.scss";
    
    export const Header = () => {
      const [initial, setInitial] = useState<string>("");
    
      return (
        <>
          <h1>Header</h1>
        </>
      );
    };  
    