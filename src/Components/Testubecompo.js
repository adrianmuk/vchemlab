import * as React from "react"
//import {View} from 'react';
import {String} from 'prop-types';
export default class Testubecompo extends React.Component{
  render(){
    const {colortop,colormiddle,colorbottom} =this.props;
    return(

      <svg
      width="50mm"
      height="160mm"
      viewBox="0 0 150 107"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <defs>
        <linearGradient
          id="f"
          y2={618.91}
          gradientUnits="userSpaceOnUse"
          x2={536.34}
          y1={652.601}
          x1={638.762}
          gradientTransform="matrix(1 0 0 .25164 0 519.035)"
        >
          <stop
            style={{
              stopColor: "#daca24",
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: "#daca24",
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="g"
          y2={461.61}
          xlinkHref="#a"
          gradientUnits="userSpaceOnUse"
          x2={606.95}
          gradientTransform="translate(-503.69 16.651)"
          y1={736.18}
          x1={553.56}
        />
        <linearGradient id="a">
          <stop
            style={{
              stopColor: "#000",
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: "#000",
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="h"
          y2={478.08}
          xlinkHref="#b"
          gradientUnits="userSpaceOnUse"
          x2={466.43}
          gradientTransform="matrix(1.1896 0 0 .61436 -482.24 -150.007)"
          y1={478.08}
          x1={454.01}
        />
        <linearGradient id="b">
          <stop
            style={{
              stopColor: "#fff",
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: "#fff",
            }}
            offset={0.5}
          />
          <stop
            style={{
              stopColor: "#fff",
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="i"
          y2={666.82}
          xlinkHref="#c"
          gradientUnits="userSpaceOnUse"
          x2={430.15}
          gradientTransform="translate(-398.64 16.651)"
          y1={671.35}
          x1={415.8}
        />
        <linearGradient id="c">
          <stop
            style={{
              stopColor: "#fff",
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: "#fff",
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="j"
          y2={280.73}
          xlinkHref="#d"
          gradientUnits="userSpaceOnUse"
          x2={492.85}
          gradientTransform="matrix(.7812 0 0 .61436 -265.086 -150.007)"
          y1={282.67}
          x1={407.02}
        />
        <linearGradient id="d">
          <stop
            style={{
              stopColor: "#6d6d6d",
              stopOpacity: 0.48677,
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: "#6d6d6d",
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <linearGradient
          id="k"
          y2={282.41}
          xlinkHref="#e"
          spreadMethod="reflect"
          gradientUnits="userSpaceOnUse"
          x2={401.74}
          gradientTransform="matrix(.7812 0 0 .61436 -265.086 -150.007)"
          y1={282.41}
          x1={428.65}
        />
        <linearGradient id="e">
          <stop
            style={{
              stopColor: "#6d6d6d",
            }}
            offset={0}
          />
          <stop
            style={{
              stopColor: "#6d6d6d",
              stopOpacity: 0,
            }}
            offset={1}
          />
        </linearGradient>
        <radialGradient
          id="l"
          xlinkHref="#e"
          gradientUnits="userSpaceOnUse"
          cy={308.55}
          cx={443.46}
          gradientTransform="matrix(1.27496 0 0 .09893 -484.04 -6.336)"
          r={27.141}
        />
      </defs>
      <g transform="matrix(1.048 0 0 1.0295 18.92 -1.156)">
        <path
          style={{
            fill:colormiddle,//middle-color
            strokeWidth: 0.614758,
          }}
          d="m60.39 206.448.322 32.16 42.083.28-.321-32.16z"
        />
        <path
          style={{
            fill: colortop,//top-color
            strokeWidth: 0.605917,
          }}
          d="m60.39 175.014.319 31.572 41.643.275-.318-31.572z"
        />
        <path
          style={{
            color: "#000",
            fill: colorbottom,//bottom-color
            strokeWidth: 0.501643,
            imageRendering: "auto",
          }}
          d="M636.78 632.78c0 .299-12.164.543-27.156.543-14.992 0-27.125-.244-27.125-.543l.287 41.235c.033 4.694 11.802 19.551 26.838 19.551 15.036 0 27.471-18.05 27.443-21.833z"
          transform="matrix(.77113 0 0 .60643 -388.763 -145.121)"
        />
        <path
          style={{
            color: "#000",
            fill: "url(#g)",
            filter: "url(#filter21870)",
          }}
          d="M69.602 318.36v363.26c0 15.036-12.12 27.156-27.156 27.156-6.929 0-13.249-2.566-18.031-6.813a26.996 26.996 0 0 0 19.5 8.25c15.036 0 27.156-12.12 27.156-27.156v-364.7z"
          transform="matrix(.7812 0 0 .61436 46.335 -160.23)"
        />
        <path
          style={{
            color: "#000",
            fill: "#d5d6d6",
            fillOpacity: 0.17989,
            strokeWidth: 1.30854,
          }}
          d="M81.32 21.771c-9.64 0-17.865.375-21.19.903v237.525c0 9.237 9.444 16.683 21.19 16.683s21.214-7.446 21.214-16.683V22.674c-3.332-.528-11.574-.903-21.214-.903Z"
        />
        <rect
          style={{
            color: "#000",
            opacity: 0.70796,
            fill: "url(#h)",
            strokeWidth: 1.30854,
          }}
          rx={1.275}
          ry={0.658}
          height={234.334}
          width={11.896}
          y={26.539}
          x={60.736}
        />
        <path
          style={{
            color: "#000",
            opacity: 0.87168,
            fill: "url(#i)",
            filter: "url(#filter21840)",
          }}
          d="M19.113 686.28c1.589 12.87 12.366 22.812 25.688 22.812s24.127-9.943 25.719-22.812l-51.689-1.299z"
          transform="matrix(.7812 0 0 .61436 46.335 -160.23)"
        />
        <path
          style={{
            color: "#000",
            opacity: 0.70796,
            fill: "url(#j)",
            strokeWidth: 1.30854,
          }}
          d="M58.596 22.5v1.613a.115.115 0 0 0-.024.077c0 .026.007.053.024.077v.017c0 .005.022 0 .025 0 .753.741 10.637 1.325 22.728 1.325 12.09 0 21.974-.583 22.728-1.325a.194.194 0 0 0 .024-.017.116.116 0 0 0 .024-.077.126.126 0 0 0-.024-.077V22.5c-.61.75-10.564 1.344-22.753 1.344S59.205 23.25 58.594 22.5z"
        />
        <path
          style={{
            color: "#000",
            fill: "url(#k)",
            strokeWidth: 1.30854,
          }}
          d="M81.35 21.004c-12.582 0-22.777.636-22.777 1.42 0 .784 10.195 1.42 22.777 1.42 12.581 0 22.776-.636 22.776-1.42 0-.784-10.195-1.42-22.776-1.42zm0 .499c6.27 0 11.955.167 16.039.422 1.152.072 1.813.164 2.685.25-.869.083-1.54.179-2.685.25-4.084.25-9.768.402-16.04.402-6.27 0-11.955-.153-16.039-.403-1.146-.07-1.816-.166-2.685-.25.872-.085 1.534-.177 2.685-.249 4.084-.255 9.769-.422 16.04-.422z"
        />
        <path
          style={{
            color: "#000",
            opacity: 0.72566,
            fill: "url(#l)",
            strokeWidth: 1.30854,
          }}
          d="M60.131 24.682v28.356h42.405V24.7c-3.323.526-11.546.902-21.19.902-9.67 0-17.91-.393-21.215-.922z"
        />
      </g>
    </svg>
    )
  }
}


Testubecompo.propTypes= {
  colortop: String,
  colormiddle: String,
  colorbottom: String,
};

Testubecompo.defaultProps ={
  colortop:'rgb(126, 126, 126)',
  colormiddle: 'rgb(126, 126, 126)',
  colorbottom: 'rgb(126, 126, 126)',
}

