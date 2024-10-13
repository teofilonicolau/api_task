const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
  {
    name: 'Maria Luiza',
    position: 'Marketing',
    photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6',
    text: 'Eu trabalhei com literalmente centenas de desenvolvedores HTML/CSS e tenho que dizer que o primeiro lugar vai para este cara. Este cara é um desenvolvedor incrível. Ele se preocupa com um código bom e limpo e presta atenção aos detalhes. Eu amo desenvolvedores que respeitam cada aspecto de um design bem pensado e fazem o seu melhor para traduzi-lo em código. Ele vai além e transforma ARTE em PIXEIS - sem falhas, toda vez.',
  },
  {
    name: 'Raimunda',
    position: 'Engenheira de Software',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text: 'Este cara é um desenvolvedor frontend incrível que entregou a tarefa exatamente como precisávamos. Faça um favor a si mesmo e contrate-o, você não ficará desapontado com o trabalho entregue. Ele vai além para garantir que você esteja satisfeito com o seu projeto. Com certeza trabalharei com ele novamente!',
  },
  {
    name: 'Ana F.',
    position: 'Digitação de Dados',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text: 'Este cara é um trabalhador árduo. A comunicação com ele também foi muito boa e ele foi muito responsivo o tempo todo, algo que não é fácil de encontrar em muitos freelancers. Com certeza repetiremos a parceria.',
  },
  {
    name: 'Sofia Costa',
    position: 'Recepcionista',
    photo: 'https://randomuser.me/api/portraits/women/65.jpg',
    text: 'Este cara faz tudo o que pode para concluir o trabalho e fazê-lo corretamente. Esta é a segunda vez que o contrato e o contratarei novamente no futuro.',
  },
  {
    name: 'José Pereira',
    position: 'Designer Gráfico',
    photo: 'https://randomuser.me/api/portraits/men/43.jpg',
    text: 'Eu tinha minhas preocupações de que, devido a um prazo apertado, este projeto não poderia ser feito. Mas este cara me provou o contrário; não só entregou um trabalho excepcional, como conseguiu entregar um dia antes do prazo. E quando pedi algumas revisões, ele as fez em MINUTOS. Estou ansioso para trabalhar com ele novamente e o recomendo totalmente. Obrigado novamente!',
  },
  {
    name: 'Sabrina Santos',
    position: 'Contadora',
    photo: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb',
    text: 'Este cara é um designer e desenvolvedor front end de primeira linha. Ele se comunica bem, trabalha rápido e produz trabalhos de qualidade. Temos sido sortudos em trabalhar com ele!',
  },
  {
    name: 'Xico Sá',
    position: 'Diretor',
    photo: 'https://randomuser.me/api/portraits/men/97.jpg',
    text: 'Este cara é um jovem e talentoso profissional de TI, proativo e responsável, com uma forte ética de trabalho. Ele é muito forte em conversões de PSD para HTML e tecnologia HTML/CSS. Ele aprende rápido, está ansioso para aprender novas tecnologias. Ele é focado e tem uma boa dinâmica para alcançar prazos e resultados excepcionais.',
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);