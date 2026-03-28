// Internationalization — Portuguese (default) and English translations

export type Lang = 'pt' | 'en';

const translations = {
  pt: {
    nav: {
      about: 'Sobre',
      products: 'Produtos',
      philosophy: 'Filosofia',
      contact: 'Contato',
    },
    hero: {
      subtitle: 'Café premium do coração do Brasil',
      cta: 'Descubra',
    },
    about: {
      heading: 'Nossa História',
      p1: 'Nascida nas terras férteis do Cerrado Mineiro, a Semiglobe Brasil é mais do que uma marca de café — é uma celebração da terra, da cultura e da dedicação de gerações de produtores que transformam cada grão em uma obra de arte.',
      p2: 'Trabalhamos diretamente com fazendas familiares que cultivam café há mais de um século, preservando métodos artesanais enquanto abraçamos a inovação sustentável. Cada lote é colhido à mão, selecionado com rigor e torrado com a precisão que só a paixão pode oferecer.',
      p3: 'Do terroir brasileiro ao mundo — levamos a alma do café especial para quem busca experiências autênticas e memoráveis.',
      quote: 'Cada xícara conta a história de uma terra que nunca dorme.',
    },
    products: {
      heading: 'Nossos Cafés',
      items: [
        {
          name: 'Café Especial Cerrado',
          description: 'Notas de chocolate amargo e caramelo, corpo aveludado. Altitude: 1.100m. Processo natural.',
          price: 'R$ 89,00',
        },
        {
          name: 'Blend Amazônia',
          description: 'Frutado e exótico, com toques de frutas vermelhas e especiarias. Secagem em terreiro suspenso.',
          price: 'R$ 112,00',
        },
        {
          name: 'Reserva Mogiana',
          description: 'Encorpado e intenso, com finalização longa de nozes e mel. Grãos selecionados safra única.',
          price: 'R$ 145,00',
        },
        {
          name: 'Micro-Lote Chapada',
          description: 'Edição limitada. Perfil floral delicado, acidez cítrica brilhante. Fermentação anaeróbica 72h.',
          price: 'R$ 198,00',
        },
        {
          name: 'Colheita Ancestral',
          description: 'Homenagem aos métodos tradicionais. Torrefação lenta em forno a lenha, sabor defumado suave.',
          price: 'R$ 167,00',
        },
      ],
    },
    philosophy: {
      heading: 'Filosofia',
      manifesto: [
        'Acreditamos que o café é um ato de resistência — contra a pressa, contra o ordinário, contra o esquecimento das nossas raízes.',
        'Cada grão carrega o sol do Brasil, a chuva da serra e o cuidado de mãos que conhecem a terra como ninguém.',
        'Sustentabilidade não é uma palavra — é a nossa herança. Devolvemos à terra mais do que tiramos, porque o futuro do café depende do respeito ao presente.',
      ],
    },
    contact: {
      heading: 'Fale Conosco',
      name: 'Seu nome',
      email: 'Seu e-mail',
      message: 'Sua mensagem',
      send: 'Enviar',
      info: 'São Paulo, Brasil\ncontato@semiglobe.com.br\n+55 11 9999-0000',
    },
    footer: {
      rights: '© 2026 Semiglobe Brasil. Todos os direitos reservados.',
      tagline: 'Do Brasil para o mundo.',
    },
  },
  en: {
    nav: {
      about: 'About',
      products: 'Products',
      philosophy: 'Philosophy',
      contact: 'Contact',
    },
    hero: {
      subtitle: 'Premium coffee from the heart of Brazil',
      cta: 'Discover',
    },
    about: {
      heading: 'Our Story',
      p1: 'Born in the fertile lands of Cerrado Mineiro, Semiglobe Brasil is more than a coffee brand — it is a celebration of the land, the culture, and the dedication of generations of producers who transform every bean into a work of art.',
      p2: 'We work directly with family farms that have cultivated coffee for over a century, preserving artisanal methods while embracing sustainable innovation. Each lot is hand-picked, rigorously selected, and roasted with the precision that only passion can provide.',
      p3: 'From the Brazilian terroir to the world — we bring the soul of specialty coffee to those who seek authentic and memorable experiences.',
      quote: 'Every cup tells the story of a land that never sleeps.',
    },
    products: {
      heading: 'Our Coffees',
      items: [
        {
          name: 'Cerrado Especial',
          description: 'Notes of dark chocolate and caramel, velvety body. Altitude: 1,100m. Natural process.',
          price: 'R$ 89.00',
        },
        {
          name: 'Amazônia Blend',
          description: 'Fruity and exotic, with hints of red berries and spices. Raised bed drying.',
          price: 'R$ 112.00',
        },
        {
          name: 'Mogiana Reserve',
          description: 'Full-bodied and intense, with a long finish of nuts and honey. Single harvest selected beans.',
          price: 'R$ 145.00',
        },
        {
          name: 'Chapada Micro-Lot',
          description: 'Limited edition. Delicate floral profile, bright citric acidity. 72h anaerobic fermentation.',
          price: 'R$ 198.00',
        },
        {
          name: 'Ancestral Harvest',
          description: 'A tribute to traditional methods. Slow roasted in a wood-fired oven, smooth smoky flavor.',
          price: 'R$ 167.00',
        },
      ],
    },
    philosophy: {
      heading: 'Philosophy',
      manifesto: [
        'We believe coffee is an act of resistance — against haste, against the ordinary, against forgetting our roots.',
        'Every bean carries the Brazilian sun, the mountain rain, and the care of hands that know the land like no other.',
        'Sustainability is not just a word — it is our heritage. We return more to the earth than we take, because the future of coffee depends on respecting the present.',
      ],
    },
    contact: {
      heading: 'Get in Touch',
      name: 'Your name',
      email: 'Your email',
      message: 'Your message',
      send: 'Send',
      info: 'São Paulo, Brazil\ncontato@semiglobe.com.br\n+55 11 9999-0000',
    },
    footer: {
      rights: '© 2026 Semiglobe Brasil. All rights reserved.',
      tagline: 'From Brazil to the world.',
    },
  },
};

export default translations;
