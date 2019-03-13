import React from "react";
import styled from "styled-components";
import {
  SkillsLink,
  AboutLink,
  PortfolioLink,
  ContactLink
} from "../../components/styled/PuzzleLinks";

const SVG = styled.svg`
  fill: #edf2f4;
  transition: fill 0.2s;

  ${SkillsLink}:hover & {
    transform: rotate(30deg);
  }

  ${AboutLink}:hover & {
    transform: rotate(60deg);
  }

  ${PortfolioLink}:hover & {
    transform: rotate(90deg);
  }

  ${ContactLink}:hover & {
    transform: rotate(0deg);
  }
`;

const WindMill = props => {
  return (
    <SVG
      width={props.width || "40%"}
      height={props.height || "40%"}
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512.001 512.001"
    >
      <path
        d="M356.029,414.671h58.642V261.949h-52.695v9.415l0.857,0.649	c10.138,7.682,16.191,19.829,16.191,32.493c0,22.449-18.264,40.712-40.713,40.712c-22.45,0-40.715-18.263-40.715-40.712	c0-12.663,6.053-24.81,16.191-32.493l0.857-0.649v-9.415H261.95v58.644c0,3.281-2.669,5.949-5.949,5.949h-18.594	c-2.09,0-4.049-1.115-5.115-2.912c-5.178-8.72-14.679-14.136-24.794-14.136c-15.888,0-28.816,12.927-28.816,28.817	c0,15.889,12.927,28.817,28.816,28.817c10.116,0,19.616-5.418,24.793-14.138c1.067-1.797,3.028-2.912,5.115-2.912h18.594	c3.281,0,5.949,2.67,5.949,5.949v58.646h58.644c3.281,0,5.949,2.67,5.949,5.949v18.593c0,2.089-1.115,4.049-2.911,5.115	c-8.719,5.175-14.134,14.676-14.134,24.794c0,15.888,12.925,28.815,28.814,28.815c15.889,0,28.816-12.925,28.816-28.815	c0-10.115-5.417-19.615-14.136-24.795c-1.796-1.067-2.911-3.027-2.911-5.115v-18.593C350.08,417.341,352.75,414.671,356.029,414.671	z"
        fill="#FF9F1C"
      />
      <g fill="#FF9F1C">
        <path d="M379.024,304.505c0,20.24-14.849,37.07-34.222,40.187c2.115,0.341,4.281,0.524,6.49,0.524 c22.449,0,40.713-18.263,40.713-40.712c0-12.664-6.053-24.81-16.191-32.493l-0.857-0.649v-9.415h-12.981v9.415l0.857,0.649 C372.971,279.694,379.024,291.841,379.024,304.505z" />
        <path d="M274.931,320.593v-58.644H261.95v58.644c0,3.281-2.669,5.949-5.949,5.949h12.981 C272.262,326.543,274.931,323.874,274.931,320.593z" />
        <path d="M191.663,338.31c0-13.642,9.532-25.091,22.283-28.06c-2.097-0.487-4.257-0.756-6.448-0.756 c-15.888,0-28.816,12.927-28.816,28.817c0,15.889,12.927,28.817,28.816,28.817c2.192,0,4.351-0.269,6.448-0.756 C201.194,363.402,191.663,351.952,191.663,338.31z" />
        <path d="M322.479,469.123c0-10.118,5.416-19.619,14.134-24.794c1.796-1.067,2.911-3.028,2.911-5.115v-18.593 c0-3.28-2.669-5.949-5.949-5.949h-12.981c3.281,0,5.949,2.67,5.949,5.949v18.593c0,2.089-1.115,4.049-2.911,5.115 c-8.719,5.175-14.134,14.676-14.134,24.794c0,15.888,12.925,28.815,28.814,28.815c2.233,0,4.403-0.264,6.49-0.745 C332.03,494.238,322.479,482.78,322.479,469.123z" />
        <path d="M268.981,350.075h-12.981c3.281,0,5.949,2.67,5.949,5.949v58.646h12.981v-58.646 C274.931,352.745,272.262,350.075,268.981,350.075z" />
      </g>
      <path
        d="M207.497,300.299c11.818,0,23.157,5.653,30.332,15.12l1.461,1.928h13.464v-58.102h-61.35	c-1.789,0-3.245-1.456-3.245-3.245v-18.593c0-1.14,0.609-2.209,1.589-2.79c9.535-5.663,15.459-16.055,15.459-27.12	c0-17.38-14.139-31.52-31.52-31.52c-17.379,0-31.519,14.139-31.519,31.52c0,11.064,5.925,21.456,15.464,27.122	c0.978,0.58,1.586,1.647,1.586,2.788v18.593c0,1.789-1.456,3.245-3.245,3.245H94.626v61.35c0,1.789-1.456,3.245-3.245,3.245H72.787	c-1.14,0-2.209-0.609-2.791-1.589c-5.66-9.535-16.052-15.459-27.118-15.459c-17.38,0-31.52,14.139-31.52,31.52	c0,17.38,14.139,31.52,31.52,31.52c11.065,0,21.456-5.926,27.121-15.464c0.58-0.978,1.647-1.586,2.788-1.586h18.593	c1.789,0,3.245,1.456,3.245,3.245v65.677h158.131v-62.432h-13.463l-1.46,1.928c-7.176,9.469-18.516,15.122-30.335,15.122	c-20.959,0-38.011-17.052-38.011-38.012C169.488,317.35,186.538,300.299,207.497,300.299z"
        fill="#31b5a9"
      />
      <g fill="#31b5a9">
        <path d="M252.755,359.27h-13.463l-1.46,1.928c-5.639,7.441-13.854,12.511-22.847,14.349 c2.474,0.507,5.034,0.775,7.656,0.775c11.701,0,22.927-5.548,30.114-14.85V359.27z" />
        <path d="M157.635,234.619c0.978,0.58,1.586,1.647,1.586,2.788v18.593c0,1.789-1.456,3.245-3.245,3.245 h15.144c1.789,0,3.245-1.456,3.245-3.245v-18.593c0-1.14-0.608-2.208-1.586-2.788c-9.539-5.666-15.464-16.059-15.464-27.122 c0-14.77,10.212-27.194,23.947-30.594c-2.426-0.601-4.962-0.925-7.572-0.925c-17.379,0-31.519,14.139-31.519,31.52 C142.17,218.56,148.095,228.953,157.635,234.619z" />
        <path d="M237.83,315.419l1.461,1.928h13.464v-2.199c-7.186-9.302-18.412-14.85-30.114-14.85 c-2.622,0-5.183,0.267-7.656,0.775C223.979,302.91,232.192,307.979,237.83,315.419z" />
        <path d="M106.524,352.781H91.38c1.789,0,3.245,1.456,3.245,3.245v61.35h15.144v-61.35 C109.77,354.237,108.314,352.781,106.524,352.781z" />
        <path d="M26.502,338.311c0-14.754,10.19-27.165,23.899-30.582c-2.44-0.606-4.962-0.937-7.523-0.937 c-17.38,0-31.52,14.139-31.52,31.52c0,17.38,14.139,31.52,31.52,31.52c2.562,0,5.083-0.331,7.521-0.937 C36.691,365.476,26.502,353.063,26.502,338.311z" />
        <path d="M109.77,320.594v-61.35H94.626v61.35c0,1.789-1.456,3.245-3.245,3.245h15.144 C108.314,323.839,109.77,322.383,109.77,320.594z" />
      </g>
      <g fill="#d62d2d">
        <path d="M304.504,144.872c-10.117,0-19.618,5.417-24.796,14.138c-1.065,1.795-3.026,2.91-5.114,2.91h-18.593 c-3.28,0-5.949-2.669-5.949-5.949V97.329h-58.644c-3.281,0-5.949-2.67-5.949-5.949V72.788c0-2.089,1.115-4.049,2.912-5.115 c8.719-5.176,14.134-14.677,14.134-24.794c0.001-15.889-12.924-28.816-28.814-28.816c-15.888,0-28.815,12.927-28.815,28.815 c0,10.115,5.417,19.615,14.136,24.795c1.796,1.067,2.911,3.027,2.911,5.115V91.38c0,3.28-2.669,5.949-5.949,5.949H97.33v152.72 h52.696v-9.413l-0.857-0.649c-10.14-7.685-16.193-19.831-16.193-32.49c0-22.45,18.264-40.715,40.714-40.715 s40.715,18.265,40.715,40.715c0,12.659-6.053,24.806-16.191,32.489l-0.857,0.649v9.414h52.696v-58.644 c0-3.28,2.67-5.949,5.949-5.949h18.593c2.089,0,4.049,1.116,5.115,2.913c5.176,8.719,14.677,14.134,24.795,14.134 c15.888,0,28.814-12.927,28.814-28.816C333.318,157.799,320.392,144.872,304.504,144.872z" />
        <path d="M316.403,144.872c-10.117,0-19.618,5.417-24.796,14.138c-1.065,1.795-3.026,2.91-5.114,2.91H267.9 c-3.28,0-5.949-2.669-5.949-5.949V97.329h-58.644c-3.281,0-5.949-2.67-5.949-5.949V72.788c0-2.089,1.115-4.049,2.912-5.115 c8.719-5.176,14.134-14.677,14.134-24.794c0.001-15.889-12.924-28.816-28.814-28.816c-15.888,0-28.815,12.927-28.815,28.815 c0,10.115,5.417,19.615,14.136,24.795c1.796,1.067,2.911,3.027,2.911,5.115V91.38c0,3.28-2.669,5.949-5.949,5.949h-58.643v152.72 h52.696v-9.413l-0.857-0.649c-10.14-7.685-16.193-19.831-16.193-32.49c0-22.45,18.264-40.715,40.714-40.715 s40.715,18.265,40.715,40.715c0,12.659-6.053,24.806-16.191,32.489l-0.857,0.649v9.414h52.696v-58.644 c0-3.28,2.67-5.949,5.949-5.949h18.593c2.089,0,4.049,1.116,5.115,2.913c5.176,8.719,14.677,14.134,24.795,14.134 c15.888,0,28.814-12.927,28.814-28.816C345.216,157.799,332.291,144.872,316.403,144.872z" />
      </g>
      <g fill="#df3126">
        8D99AE
        <path d="M291.606,159.012c4.153-6.993,11.085-11.853,18.885-13.508c-1.932-0.41-3.934-0.63-5.987-0.63 c-10.117,0-19.618,5.417-24.796,14.138c-1.065,1.795-3.026,2.91-5.114,2.91h11.899 C288.581,161.921,290.541,160.806,291.606,159.012z" />
        <path d="M159.01,67.672c1.796,1.067,2.911,3.027,2.911,5.115V91.38c0,3.28-2.669,5.949-5.949,5.949h11.899 c3.281,0,5.949-2.67,5.949-5.949V72.788c0-2.089-1.115-4.048-2.911-5.115c-8.72-5.18-14.136-14.68-14.136-24.795 c0-13.85,9.822-25.444,22.866-28.193c-1.92-0.405-3.91-0.621-5.949-0.621c-15.889-0.001-28.816,12.925-28.816,28.814 C144.875,52.992,150.292,62.492,159.01,67.672z" />
        <path d="M291.608,188.369c-1.067-1.797-3.028-2.913-5.115-2.913h-11.899c2.089,0,4.049,1.116,5.115,2.913 c5.176,8.719,14.677,14.134,24.795,14.134c2.053,0,4.054-0.22,5.987-0.63C302.691,200.218,295.758,195.361,291.608,188.369z" />
        <rect x="97.333" y="97.333" width="11.899" height="152.717" />
        <path d="M210.111,239.987c10.138-7.685,16.191-19.83,16.191-32.489c0-22.45-18.265-40.715-40.715-40.715 c-2.021,0-4.007,0.154-5.949,0.439c19.639,2.888,34.765,19.846,34.765,40.275c0,12.659-6.053,24.806-16.191,32.489l-0.857,0.649 v9.414h11.899v-9.414L210.111,239.987z" />
      </g>
      <path
        d="M469.124,144.872c-10.116,0-19.618,5.417-24.797,14.137c-1.067,1.796-3.027,2.911-5.115,2.911h-18.59	c-3.28,0-5.949-2.669-5.949-5.949V91.92H261.95v58.102h9.414l0.649-0.857c7.685-10.139,19.83-16.192,32.491-16.192	c22.449,0,40.713,18.265,40.713,40.715s-18.264,40.715-40.713,40.715c-12.661,0-24.809-6.053-32.492-16.191l-0.649-0.857h-9.413	v52.695h58.644c3.28,0,5.949,2.669,5.949,5.949v18.595c0,2.089-1.116,4.049-2.913,5.117c-8.719,5.176-14.134,14.677-14.134,24.796	c0,15.886,12.927,28.813,28.816,28.813c15.888,0,28.814-12.925,28.814-28.813c0-10.12-5.416-19.621-14.135-24.796	c-1.797-1.065-2.912-3.027-2.912-5.117v-18.595c0-3.281,2.67-5.949,5.949-5.949h58.644v-58.644c0-3.28,2.67-5.949,5.949-5.949h18.59	c2.089,0,4.049,1.115,5.117,2.911c5.176,8.72,14.677,14.136,24.796,14.136c15.888,0,28.815-12.927,28.815-28.816	C497.938,157.799,485.012,144.872,469.124,144.872z"
        fill="#8D99AE"
      />
      <g fill="#8D99AE">
        <path d="M358.197,173.688c0-22.45-18.264-40.715-40.713-40.715c-2.166,0-4.313,0.19-6.429,0.534 c19.344,3.143,34.161,19.961,34.161,40.18s-14.816,37.036-34.161,40.18c2.115,0.344,4.263,0.534,6.429,0.534 C339.933,214.403,358.197,196.138,358.197,173.688z" />
        <path d="M457.307,159.01c4.056-6.83,10.771-11.62,18.349-13.381c-2.1-0.489-4.285-0.756-6.533-0.756 c-10.116,0-19.618,5.417-24.797,14.137c-1.067,1.796-3.027,2.911-5.115,2.911h12.981 C454.281,161.921,456.24,160.806,457.307,159.01z" />
        <path d="M272.013,149.166c0.911-1.202,1.888-2.341,2.917-3.425V97.329H261.95v52.694h9.414L272.013,149.166z" />
        <path d="M272.012,198.212l-0.649-0.857h-9.413v52.695h12.981v-48.412 C273.901,200.554,272.923,199.414,272.012,198.212z" />
        <path d="M457.308,188.367c-1.067-1.796-3.028-2.911-5.117-2.911h-12.981c2.089,0,4.049,1.115,5.117,2.911 c5.176,8.72,14.677,14.136,24.796,14.136c2.247,0,4.432-0.267,6.533-0.756C468.076,199.987,461.364,195.198,457.308,188.367z" />
        <path d="M322.477,304.505c0-10.118,5.416-19.62,14.134-24.796c1.797-1.067,2.913-3.028,2.913-5.117v-18.595 c0-3.281-2.67-5.949-5.949-5.949h-12.981c3.28,0,5.949,2.669,5.949,5.949v18.595c0,2.089-1.116,4.049-2.913,5.117 c-8.719,5.176-14.134,14.677-14.134,24.796c0,15.886,12.927,28.813,28.816,28.813c2.233,0,4.403-0.264,6.49-0.745 C332.029,329.618,322.477,318.16,322.477,304.505z" />
      </g>
      <path
        d="M469.124,130.81c-13.45,0-26.167,6.43-34.216,17.049h-6.174v-56.48c0-4.482-3.631-8.113-8.113-8.113	h-27.149c-4.482,0-8.113,3.631-8.113,8.113c0,4.482,3.631,8.113,8.113,8.113h19.036v56.48c0,4.482,3.631,8.113,8.113,8.113h18.592	c2.862,0,5.513-1.509,6.975-3.97c4.792-8.067,13.581-13.079,22.937-13.079c14.695,0,26.651,11.956,26.651,26.652	c0,14.696-11.956,26.652-26.651,26.652c-9.358,0-18.147-5.011-22.936-13.077c-1.462-2.461-4.114-3.971-6.976-3.971h-18.592	c-4.482,0-8.113,3.631-8.113,8.113v56.481h-56.481c-4.482,0-8.113,3.631-8.113,8.113v18.594c0,2.863,1.51,5.516,3.972,6.976	c8.065,4.788,13.076,13.577,13.076,22.936c0,14.694-11.955,26.649-26.65,26.649c-14.696,0-26.652-11.955-26.652-26.649	c0-9.359,5.01-18.147,13.076-22.936c2.462-1.462,3.972-4.113,3.972-6.976v-18.594c0-4.482-3.631-8.113-8.113-8.113h-56.481v-48.368	h6.174c8.046,10.617,20.763,17.048,34.216,17.048c23.641,0,42.876-19.235,42.876-42.878s-19.234-42.878-42.876-42.878	c-13.451,0-26.167,6.43-34.215,17.049h-6.176V99.492h102.312c4.482,0,8.113-3.631,8.113-8.113c0-4.482-3.631-8.113-8.113-8.113	H256.001H199.52v-6.174c10.617-8.046,17.047-20.762,17.047-34.215C216.567,19.235,197.333,0,173.689,0s-42.877,19.235-42.877,42.877	c0,13.45,6.429,26.165,17.048,34.214v6.176H91.381l0,0l0,0c-4.482,0-8.113,3.631-8.113,8.113v164.62v56.482h-6.176	c-8.046-10.617-20.76-17.048-34.214-17.048C19.235,295.434,0,314.669,0,338.311s19.235,42.878,42.878,42.878	c13.45,0,26.165-6.43,34.214-17.05h6.176v56.481l0,0l0,0c0,4.482,3.631,8.113,8.113,8.113h28.769c4.482,0,8.113-3.631,8.113-8.113	c0-4.482-3.631-8.113-8.113-8.113H99.493v-56.481c0-4.482-3.631-8.113-8.113-8.113H72.787c-2.862,0-5.515,1.509-6.975,3.971	c-4.791,8.067-13.579,13.079-22.934,13.079c-14.696,0-26.652-11.956-26.652-26.652s11.956-26.652,26.652-26.652	c9.358,0,18.145,5.01,22.932,13.076c1.461,2.462,4.113,3.972,6.976,3.972h18.593c4.482,0,8.113-3.631,8.113-8.113v-56.481h56.482	c4.482,0,8.113-3.631,8.113-8.113v-18.593c0-2.862-1.509-5.515-3.971-6.975c-8.067-4.792-13.079-13.58-13.079-22.935	c0-14.696,11.956-26.652,26.651-26.652c14.696,0,26.652,11.956,26.652,26.652c0,9.356-5.011,18.144-13.077,22.935	c-2.462,1.461-3.971,4.113-3.971,6.975v18.593c0,4.482,3.631,8.113,8.113,8.113h56.482v48.368h-6.178	c-8.047-10.618-20.762-17.049-34.213-17.049c-23.642,0-42.878,19.235-42.878,42.879s19.235,42.879,42.878,42.879	c13.451,0,26.166-6.431,34.214-17.051h6.177v48.37H145.396c-4.482,0-8.113,3.631-8.113,8.113s3.631,8.113,8.113,8.113h110.605	h56.481v6.174c-10.616,8.046-17.046,20.762-17.046,34.215c0,23.642,19.234,42.877,42.876,42.877s42.878-19.234,42.878-42.877	c0-13.45-6.429-26.165-17.048-34.214v-6.176h56.479c4.482,0,8.113-3.631,8.113-8.113v-55.044v-10.269v-99.309v-56.481h6.173	c8.047,10.617,20.765,17.048,34.217,17.048c23.642,0,42.877-19.235,42.877-42.878S492.766,130.81,469.124,130.81z M199.519,241.711	c10.617-8.047,17.048-20.764,17.048-34.214c0-23.642-19.235-42.878-42.878-42.878s-42.877,19.235-42.877,42.878	c0,13.45,6.43,26.166,17.05,34.215v6.174H99.493V99.492h56.48c4.482,0,8.113-3.631,8.113-8.113V72.788	c0-2.862-1.509-5.514-3.97-6.975c-8.066-4.792-13.078-13.58-13.078-22.935c0-14.696,11.955-26.652,26.651-26.652	c14.695,0,26.651,11.956,26.651,26.651c0,9.358-5.011,18.145-13.076,22.934c-2.461,1.462-3.971,4.114-3.971,6.976v18.593	c0,4.482,3.631,8.113,8.113,8.113h56.481v56.48c0,4.482,3.631,8.113,8.113,8.113h18.593c2.862,0,5.515-1.509,6.975-3.97	c4.791-8.067,13.58-13.079,22.936-13.079c14.695,0,26.65,11.956,26.65,26.652c0,14.696-11.955,26.652-26.65,26.652	c-9.358,0-18.146-5.011-22.935-13.076c-1.462-2.462-4.113-3.972-6.976-3.972h-18.593c-4.482,0-8.113,3.631-8.113,8.113v56.481	h-48.369V241.711z M356.029,412.508c-4.482,0-8.113,3.631-8.113,8.113v18.593c0,2.862,1.509,5.514,3.97,6.975	c8.066,4.792,13.078,13.58,13.078,22.935c0,14.695-11.956,26.651-26.652,26.651c-14.695,0-26.65-11.956-26.65-26.651	c0-9.358,5.009-18.146,13.075-22.934c2.461-1.462,3.971-4.114,3.971-6.976v-18.593c0-4.482-3.631-8.113-8.113-8.113h-56.481v-56.483	c0-4.482-3.631-8.113-8.113-8.113h-18.594c-2.862,0-5.515,1.51-6.976,3.971c-4.79,8.069-13.577,13.08-22.932,13.08	c-14.696,0-26.652-11.957-26.652-26.654c0-14.696,11.956-26.654,26.652-26.654c9.355,0,18.143,5.012,22.934,13.078	c1.461,2.462,4.113,3.971,6.975,3.971h18.594c4.482,0,8.113-3.631,8.113-8.113v-56.48h48.368v6.177	c-10.617,8.046-17.048,20.764-17.048,34.217c0,23.641,19.235,42.875,42.878,42.875c23.641,0,42.876-19.233,42.876-42.875	c0-13.454-6.43-26.171-17.048-34.217v-6.177h48.368v91.198v10.269v46.93h-56.479V412.508z"
        fill="#202121"
      />
    </SVG>
  );
};

export default WindMill;
