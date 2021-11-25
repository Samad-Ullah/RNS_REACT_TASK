import styled from 'styled-components';

export const Heading = styled.h3`
	font-weight: 600;
	color: black;
    text-align:left;
    padding:40px;
    font-size:28px;
`;
export const Top = styled.div`
    padding:20px;

`;

export const Div = styled.div`
margin-top:15px;
min-height: 20vh;
background:white;
border-radius:5px
`;


export const Input = styled.input`
width: 20%;
height: 16px;
  padding: 0.5em;
  border-radius:3px;
  background: white;
  border: none;
  color: gray;
  margin-left:20%;
 border:none;
 border-bottom:3px solid gray;
`;
export const Select = styled.select`
  width: 40%;
  height: 25px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid gray;
  border-radius:3px;
  margin-left: 10px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;






export const Button = styled.button`
  display: inline-block;
  color: white;
  background:#0047AB;
  font-size: 14px;
  margin: 1em;
  padding: 10px;
  padding-left:30px;
  padding-right:30px;
  border-radius: 5px;
  border: 1px solid white;
  display: block;
  float:right;
`;

export const Text = styled.p`
	color: darkgray;
    font-size:14px
`;
export const Text1 = styled.p`
	color: darkgray;
    font-size:14px
    display: block;
    float:right;
    margin-top:-50px;
    margin-left:-20%;
`;


export const Thumbnail = styled.span`
	font-size: 50px;
`;

export const Image = styled.img`

 width:20px;
 height:20px
`;

//Layout atoms
export const Flex = styled.div`


`;

export const Center = styled(Flex)`


    background:#0047AB;
`;