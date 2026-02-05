import { data as recipes } from './recipeData.js' ;

//** Test 순서
//=> 1) Recipe.jsx 
//=> 2) Recipe02.jsx  
//  1), 2) 모두 차례로 Test 해보세요 ~~
//=> App.jsx 에서 <MyMain /> 확인하세요 ~~

//import Recipe from './Recipe.jsx';
import Recipe from './Recipe02.jsx';

//** 화살표 함수로 작성
//=> 화살표 함수 로 컴포넌트 작성
//  { }, return 생략

//=> export default const Main...
//   const 앞에 export default 는 허용하지 않음
const Main = ()=> 
  <article>
    <h1>** 맛있는 조리법 **</h1>
    <div className='recipes'>
      {recipes.map((recipe, i) =>  
          <Recipe key={i} {...recipe} />
          // ...recipe : 펼침연산자
          // name:recipe.name, ingredients:recipe.ingredients, steps:recipe.steps
      )}
    </div>
  </article>
//Main
export default Main;