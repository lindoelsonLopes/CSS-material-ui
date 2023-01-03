import { Box, Paper, Stack, styled, TextField } from "@mui/material";

export const CustomForm = styled("form")`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center ;
  justify-content: center;
`

export const CustomPaper = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 30rem;
  height: 32rem;
  padding: 2rem 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
`

export const CustomBox = styled(Box)`
  display: flex;  
  align-items: center;
  width: 100%;
  justify-content: space-around;
`

export const CustomStack = styled(Stack)`
  display: flex;  
  align-items: center;
  width: 100%;
  justify-content: center;
`

export const CustomTextField = styled(TextField)` 
  border-radius: 0.5rem;
`