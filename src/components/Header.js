import { useState } from 'react'



function Header ({total, money}) {
    return(
        <>
        <div>
            {total > 0 && (
                <div>You have {money - total }$ to left!</div>
           )}

           {total === 0 && (
            <div>You have {money}$ to spend!</div>
        )}

            {money - total === 0 && ( 
                <div>You're out of money</div>
            )}
             

            
          
        </div>
        </>
    )
    

}

export default Header;