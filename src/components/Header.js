import { useState } from 'react'



function Header ({total, money}){
    return(
        <>
        <div>
            {total > 0 && (

           <>
           You have {money - total }$ to left!
           </>

            ) || (
                <>
                You have {money}$ to spend!
           </>
              

            )}
          
        </div>
        </>
    )
    

}

export default Header;