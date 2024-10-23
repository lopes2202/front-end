import './Blogs.css'
const Blogs = () => {
  const posts = [
      {
          title: "Meu Primeiro Post",
          content: "Este é o conteúdo do meu primeiro post. Estou animado para compartilhar minhas experiências!",
          date: "22 de Outubro de 2024"
      },
      {
          title: "Dicas de Programação",
          content: "Aqui estão algumas dicas úteis para melhorar suas habilidades de programação: pratique todos os dias, estude algoritmos e nunca tenha medo de perguntar.",
          date: "15 de Outubro de 2024"
      },
      {
          title: "Aprendendo React",
          content: "React é uma biblioteca poderosa para construir interfaces de usuário. Neste post, vou compartilhar alguns recursos úteis que encontrei.",
          date: "10 de Outubro de 2024"
      }
  ];

  return (
      <div>
          <h1>Blog do Site</h1>
          {posts.map((post, index) => (
              <div key={index} className="post">
                  <h2>{post.title}</h2>
                  <p><em>{post.date}</em></p>
                  <p>{post.content}</p>
              </div>
          ))}
      </div>
  );
};

export default Blogs;
