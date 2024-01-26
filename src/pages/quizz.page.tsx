import { useParams } from 'react-router-dom';

export const QuizzPage = () => {
const {category} = useParams();
console.log({category});

  return (
    <>
    Quizz
    </>
  )
}