// import * as React from "react";
// import { SvgIcon } from "@material-ui/core";

// export default function Gicon(props) {
//   return (
//     <SvgIcon
//       {...props}
//       version="1.0"
//       xmlns="http://www.w3.org/2000/svg"
//       width="28.000000pt" height="28.000000pt"
//       viewBox="0 0 28.000000 28.000000"
//       preserveAspectRatio="xMidYMid meet"
//       transform="translate(0.000000,28.000000) scale(0.100000,-0.100000)"
//       fill="#000000" stroke="none"
//       d="M0 140 l0 -140 140 0 140 0 0 140 0 140 -140 0 -140 0 0 -140z m212
//         81 c29 -26 33 -35 33 -81 0 -44 -4 -55 -28 -76 -33 -28 -68 -39 -102 -30 -13
//         3 -37 17 -52 30 -24 21 -28 32 -28 76 0 46 4 55 33 81 24 22 42 29 72 29 30 0
//         48 -7 72 -29z"
//       >
//     </SvgIcon>
//   );
// }

import React from 'react'
import { SvgIcon } from "@material-ui/core";
//Google Icon for Authentication Button
export default function GIcon() {
    return (
        <SvgIcon viewBox="0 0 24 24">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
         </SvgIcon>    )
}