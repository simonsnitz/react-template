import React from 'react';
import { Row } from "react-bootstrap";



export default function Home(){


/* adjusts information displayed in table based on screen size width */
        const [dimensions, setDimensions] = React.useState({ width: window.innerWidth })
          
          React.useEffect(() => {
            function handleResize() {
              setDimensions({
                width: window.innerWidth
              })
        }
        
            window.addEventListener('resize', handleResize)
        
            return _ => {
              window.removeEventListener('resize', handleResize)
        }
          });


    return(

        <Row>
        
          <h1 style={{textAlign: "center", marginTop: "200px"}}>
            This is the Minimal React Web Page Template
          </h1>
        
        </Row>
    )

    }