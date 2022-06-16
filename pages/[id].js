// export const getStaticPaths = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//   const data = await response.json();

//   const paths = data.map((todoData) => {
//     return {
//       params: { id: todoData.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async (context) => {
//   const id = context.params.id;

//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/todos/' + id
//   );
//   const data = await response.json();
//   console.log(data);

//   return {
//     props: { todoData: data },
//   };
// };

// const Todo = ({ todoData, url }) => {
//   return (
//     <div>
//       <h1>{todoData.title}</h1>
//     </div>
//   );
// };

// export default Todo;
