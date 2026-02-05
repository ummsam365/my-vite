
//** Recipe 를 모듈화
//=> ingredients , instructions
//=> Recipe02 가 전달받은 data 들을 보내주어야함 
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';
 
const Recipe02 = ({name, ingredients, steps}) =>  
  <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <IngredientsList ingreList={ingredients} />
    <Instructions name={name} steps={steps} />
  </section> //Recipe02_end

export default Recipe02;