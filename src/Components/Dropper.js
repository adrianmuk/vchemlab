import * as React from "react"
//import {View} from 'react';
import {String} from 'prop-types';
export default class Dropper extends React.Component{
  render(){
    const {dropcolor} =this.props;
    return(

        <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        id="svg789"
        width="200.819"
        height="349.969"
        version="1.1"
        viewBox="0 0 91.498 97.888"
      >
        <defs id="defs786">
          <linearGradient
            id="linearGradient4085"
            x1="642.62"
            x2="673.43"
            y1="601.53"
            y2="631.86"
            gradientTransform="translate(-85.563 -133.052) scale(.25251)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              id="stop3680"
              offset="0"
              stopColor="#fff"
              stopOpacity="0"
            ></stop>
            <stop
              id="stop3682"
              offset="0.352"
              stopColor="#b1b1b1"
              stopOpacity="0.196"
            ></stop>
            <stop
              id="stop3684"
              offset="0.729"
              stopColor="#8a8a8a"
              stopOpacity="0.588"
            ></stop>
            <stop id="stop3676" offset="1" stopColor="#646464"></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient4087"
            x1="642.62"
            x2="618.43"
            y1="601.53"
            y2="580.79"
            gradientTransform="translate(-85.563 -133.052) scale(.25251)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              id="stop3680-1"
              offset="0"
              stopColor="#fff"
              stopOpacity="0"
            ></stop>
            <stop
              id="stop3682-7"
              offset="0.352"
              stopColor="#b1b1b1"
              stopOpacity="0.196"
            ></stop>
            <stop
              id="stop3684-1"
              offset="0.729"
              stopColor="#8a8a8a"
              stopOpacity="0.588"
            ></stop>
            <stop id="stop3676-1" offset="1" stopColor="#646464"></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient4089"
            x1="278.69"
            x2="308.46"
            y1="448.08"
            y2="417.72"
            gradientTransform="translate(-10.878 -74.71) scale(.25251)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient3799"
          ></linearGradient>
          <linearGradient id="linearGradient3799">
            <stop
              id="stop3801"
              offset="0"
              stopColor="#57534a"
              stopOpacity="0.69"
            ></stop>
            <stop
              id="stop3803"
              offset="1"
              stopColor="#feca79"
              stopOpacity="0"
            ></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient4091"
            x1="247.26"
            x2="262.86"
            y1="447.36"
            y2="407.36"
            gradientTransform="translate(-3.03 -74.169) scale(.25251)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient3799"
          ></linearGradient>
          <linearGradient
            id="linearGradient4093"
            x1="497.35"
            x2="450.38"
            y1="403.06"
            y2="358.8"
            gradientTransform="translate(-46.894 -69.235) scale(.25251)"
            gradientUnits="userSpaceOnUse"
            xlinkHref="#linearGradient3799"
          ></linearGradient>
          <radialGradient
            id="radialGradient4095"
            cx="376.07"
            cy="438.08"
            r="38.864"
            gradientTransform="matrix(.25251 0 0 .2544 -30.171 -77)"
            gradientUnits="userSpaceOnUse"
          >
            <stop id="stop3674-9" offset="0" stopColor="#646464"></stop>
            <stop id="stop3680-4" offset="0.371" stopColor="#fff"></stop>
            <stop id="stop3682-8" offset="0.61" stopColor="#b1b1b1"></stop>
            <stop id="stop3684-8" offset="0.805" stopColor="#8a8a8a"></stop>
            <stop id="stop3676-2" offset="1" stopColor="#646464"></stop>
          </radialGradient>
          <linearGradient
            id="linearGradient4097"
            x1="268.44"
            x2="306.68"
            y1="580.49"
            y2="612.81"
            gradientTransform="translate(-36.964 -85.29) scale(.25251)"
            gradientUnits="userSpaceOnUse"
          >
            <stop id="stop3628" offset="0" stopColor="#c8c8c8"></stop>
            <stop id="stop3647" offset="0.5" stopColor="#fff"></stop>
            <stop id="stop3630" offset="1" stopColor="#c8c8c8"></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient4099"
            x1="288.57"
            x2="325.25"
            y1="566.2"
            y2="596.65"
            gradientTransform="translate(-36.964 -85.29) scale(.25251)"
            gradientUnits="userSpaceOnUse"
          >
            <stop id="stop3852" offset="0" stopColor="#fff"></stop>
            <stop id="stop3854" offset="1" stopColor="#959595"></stop>
          </linearGradient>
          <linearGradient
            id="linearGradient4101"
            x1="519.85"
            x2="457.88"
            y1="287.04"
            y2="416.66"
            gradientTransform="translate(-46.894 -69.235) scale(.25251)"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              id="stop3801-2"
              offset="0"
              stopColor="#57534a"
              stopOpacity="0.69"
            ></stop>
            <stop
              id="stop3803-3"
              offset="1"
              stopColor="#feca79"
              stopOpacity="0"
            ></stop>
          </linearGradient>
        </defs>
        <g id="layer1" transform="translate(-2.612 -3.097)">
          <path
            id="path3645-7-4"
            fill="#feca79"
            strokeWidth="0.253"
            d="M74.335 38.162c-5.071 5.695-18.654-8.525-14.05-13.419 4.604-4.893 9.134-9.86 13.906-14.59 1.83-1.813 3.47-3.857 5.606-5.32 2.9-1.987 7.081-2.196 9.978-.118 2.174 1.56 3.924 3.946 4.232 6.648.468 4.114-1.948 6.862-4.458 9.712-5.04 5.722-10.142 11.39-15.214 17.086z"
          ></path>
          <path
            id="path3645-7"
            fill="url(#linearGradient4085)"
            strokeWidth="0.253"
            d="M74.335 38.162c-5.071 5.695-18.654-8.525-14.05-13.419 4.604-4.893 9.134-9.86 13.906-14.59 1.83-1.813 3.47-3.857 5.606-5.32 2.9-1.987 7.081-2.196 9.978-.118 2.174 1.56 3.924 3.946 4.232 6.648.468 4.114-1.948 6.862-4.458 9.712-5.04 5.722-10.142 11.39-15.214 17.086z"
            opacity="0.636"
          ></path>
          <path
            id="path3645-7-5"
            fill="url(#linearGradient4087)"
            strokeWidth="0.253"
            d="M74.335 38.162c-5.071 5.695-18.654-8.525-14.05-13.419 4.604-4.893 9.134-9.86 13.906-14.59 1.83-1.813 3.47-3.857 5.606-5.32 2.9-1.987 7.081-2.196 9.978-.118 2.174 1.56 3.924 3.946 4.232 6.648.468 4.114-1.948 6.862-4.458 9.712-5.04 5.722-10.142 11.39-15.214 17.086z"
            opacity="0.636"
          ></path>
          <path
            id="path3645"
            fill="none"
            stroke="#000"
            strokeWidth="0.296"
            d="M60.182 24.743c4.604-4.893 9.133-9.86 13.906-14.59 1.829-1.813 3.469-3.857 5.606-5.32 2.9-1.987 7.081-2.196 9.977-.118 2.175 1.56 3.925 3.946 4.233 6.648.468 4.114-1.948 6.862-4.458 9.712-5.04 5.722-10.143 11.39-15.214 17.086"
          ></path>
          <path
            id="path3634-2"
            fill="#f4c57b"
            strokeWidth="0.253"
            d="M52.937 29.099c-.124-1.394.269-2.761 1.424-3.577 2.562-1.425 5.342-.321 7.648 1.04 1.835 1.093 3.55 2.366 5.193 3.732 2.996 2.574 5.624 5.605 6.406 9.55.246 1.453.669 3.196-.356 4.471-3.662 3.297-9.652-2.154-12.417-4.338-1.987-1.596-3.836-3.385-5.542-5.277-1.46-1.524-2.087-3.55-2.356-5.601z"
          ></path>
          <path
            id="path3634-2-2"
            fill="url(#linearGradient4089)"
            strokeWidth="0.253"
            d="M52.937 29.099c-.124-1.394.258-2.778 1.412-3.594 2.563-1.425 5.354-.304 7.66 1.056 1.835 1.094 3.55 2.367 5.193 3.733 2.995 2.574 5.624 5.605 6.406 9.55.226 1.453.455 3.241-.402 4.516-3.66 3.15-9.606-2.199-12.371-4.383-1.987-1.596-3.836-3.385-5.542-5.277-1.46-1.524-2.087-3.55-2.356-5.601z"
            opacity="0.6"
          ></path>
          <path
            id="path3634-2-8"
            fill="url(#linearGradient4091)"
            strokeWidth="0.253"
            d="M52.937 29.099c-.124-1.394.246-2.767 1.401-3.583 2.563-1.424 5.365-.315 7.671 1.045 1.835 1.094 3.55 2.367 5.193 3.733 2.995 2.574 5.624 5.605 6.406 9.55.226 1.453.557 3.275-.3 4.55-3.661 3.15-9.708-2.233-12.473-4.417-1.987-1.595-3.836-3.385-5.542-5.277-1.46-1.523-2.087-3.55-2.356-5.6z"
            opacity="0.5"
          ></path>
          <path
            id="path3645-7-4-2"
            fill="url(#linearGradient4093)"
            strokeWidth="0.253"
            d="M74.335 38.162c-5.071 5.695-18.654-8.525-14.05-13.419 4.604-4.893 9.134-9.86 13.906-14.59 1.83-1.813 3.47-3.857 5.606-5.32 2.9-1.987 7.081-2.196 9.978-.118 2.174 1.56 3.924 3.946 4.232 6.648.468 4.114-1.948 6.862-4.458 9.712-5.04 5.722-10.142 11.39-15.214 17.086z"
          ></path>
          <path
            id="path3639-9"
            fill="#feca79"
            strokeWidth="0.253"
            d="M54.977 25.299c2.13-1.053 4.843-.953 6.922.155 3.572 1.901 6.764 4.493 9.469 7.463 1.576 1.731 2.852 4.185 3.17 6.634.21 1.61-.055 3.461-1.163 4.742v.046l.135-.474.248-.654.203-1.06-.203-2.231-.429-1.601-.496-.992-.676-1.398-1.105-1.668-.856-1.015-1.894-1.984-2.39-2.007-1.826-1.307-2.21-1.398-1.51-.767-1.579-.518-1.33-.36-1.06.022-1.42.372z"
          ></path>
          <path
            id="path3639-9-9"
            fill="url(#radialGradient4095)"
            strokeWidth="0.253"
            d="M54.977 25.299c2.13-1.053 4.843-.953 6.922.155 3.572 1.901 6.764 4.493 9.469 7.463 1.576 1.731 2.852 4.185 3.17 6.634.21 1.61-.055 3.461-1.163 4.742v.046l.135-.474.248-.654.203-1.06-.203-2.231-.429-1.601-.496-.992-.676-1.398-1.105-1.668-.856-1.015-1.894-1.984-2.39-2.007-1.826-1.307-2.21-1.398-1.51-.767-1.579-.518-1.33-.36-1.06.022-1.42.372z"
            opacity="0.2"
          ></path>
          <path
            id="path3634"
            fill="none"
            stroke="#000"
            strokeWidth="0.296"
            d="M53.063 29.225c-.124-1.394.185-2.846 1.34-3.662 2.562-1.424 5.427-.236 7.732 1.125 1.835 1.093 3.55 2.366 5.193 3.732 2.996 2.574 5.624 5.605 6.406 9.551.226 1.452.587 3.323-.503 4.391-3.427 3.358-9.504-2.075-12.27-4.259-1.987-1.595-3.836-3.385-5.542-5.277-1.46-1.523-2.087-3.549-2.356-5.6z"
          ></path>
          <path
            id="path2830-1"
            fill="url(#linearGradient4097)"
            strokeWidth="0.253"
            d="M58.674 30.947c-.496.18-32.715 34.006-47.076 52.667-3.15 4.093-5.845 8.524-8.522 12.941-.08.132-.2.253-.225.406-.026.152-.098.358-.09.54.01.249.009.543.18.722l.992 1.037.496.406 1.578 1.082c.174.12.449.104.631 0 4.317-2.44 8.26-5.793 12.085-8.973C36.769 75.622 68.73 39.063 68.73 39.063l.316-.947-.225-1.758-1.173-2.074-1.443-1.669-2.705-1.849-2.3-.856-1.668.27-.857.767z"
            opacity="0.4"
          ></path>
          <path
            id="path279"
            style={{
                fill:dropcolor,
            }}
            fillOpacity="1"
            fillRule="evenodd"
            stroke="#000"
            strokeOpacity="1"
            strokeWidth="0.253"
            d="M24.657 67.564h18.051L29.531 81.283l-8.123 8.123-6.86 5.776-6.137 4.513-1.986 1.083-2.708-1.624-1.083-1.264v-.903l3.069-4.873 5.596-8.304 3.971-5.054 5.055-5.777z"
            display="inline"
          ></path>
          <path
            id="path2830-1-3"
            fill="url(#linearGradient4099)"
            strokeWidth="0.253"
            d="M58.674 30.947c-.496.18-32.715 34.006-47.076 52.667-3.15 4.093-5.845 8.524-8.522 12.941-.08.132-.2.253-.225.406-.026.152-.098.358-.09.54.01.249.009.543.18.722l.992 1.037.496.406 1.578 1.082c.174.12.449.104.631 0 4.317-2.44 8.26-5.793 12.085-8.973C36.769 75.622 68.73 39.063 68.73 39.063l.316-.947-.225-1.758-1.173-2.074-1.443-1.669-2.705-1.849-2.3-.856-1.668.27-.857.767z"
            display="inline"
            opacity="0.3"
          ></path>
          <path
            id="path2830"
            fill="none"
            stroke="#000"
            strokeWidth="0.296"
            d="M58.674 30.947c-.496.18-32.715 34.006-47.076 52.667-3.15 4.093-5.845 8.524-8.522 12.941-.08.132-.2.253-.225.406-.026.152-.098.358-.09.54.01.249.009.543.18.722l.992 1.037.496.406 1.578 1.082c.174.12.449.104.631 0 4.317-2.44 8.26-5.793 12.085-8.973C36.769 75.622 68.73 39.063 68.73 39.063c.774-1.745.016-3.353-.98-4.78-.422-.602-.996-1.178-1.545-1.668-2.164-1.831-4.927-3.697-7.53-1.668z"
            display="inline"
          ></path>
          <path
            id="path3645-7-4-2-8"
            fill="url(#linearGradient4101)"
            strokeWidth="0.253"
            d="M74.335 38.162c-5.071 5.695-18.654-8.525-14.05-13.419 4.604-4.893 9.134-9.86 13.906-14.59 1.83-1.813 3.47-3.857 5.606-5.32 2.9-1.987 7.081-2.196 9.978-.118 2.174 1.56 3.924 3.946 4.232 6.648.468 4.114-1.948 6.862-4.458 9.712-5.04 5.722-10.142 11.39-15.214 17.086z"
            opacity="0.3"
          ></path>
          <path
            id="path3639"
            fill="none"
            stroke="#000"
            strokeWidth="0.296"
            d="M54.977 25.299c2.13-1.053 4.843-.953 6.922.155 3.572 1.901 6.764 4.493 9.469 7.463 1.576 1.731 2.852 4.185 3.17 6.634.21 1.61-.157 3.484-1.265 4.765"
          ></path>
        </g>
      </svg>
     

         )
  }
}


Dropper.propTypes= {
   dropcolor: String,

 };

Dropper.defaultProps ={
   dropcolor:'rgb(126, 126, 126)',

 }

