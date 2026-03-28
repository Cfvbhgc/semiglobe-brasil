export type Language = 'pt' | 'en';

export interface Translations {
  nav: {
    about: string;
    products: string;
    philosophy: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
  };
  products: {
    title: string;
    subtitle: string;
    items: {
      name: string;
      description: string;
      price: string;
    }[];
  };
  philosophy: {
    title: string;
    slides: {
      heading: string;
      text: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    success: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
}

const pt: Translations = {
  nav: {
    about: 'Sobre',
    products: 'Produtos',
    philosophy: 'Filosofia',
    contact: 'Contato',
  },
  hero: {
    subtitle: 'A essência do Brasil em cada detalhe. Café premium, estilo de vida extraordinário.',
    cta: 'Descubra Nossa História',
  },
  about: {
    title: 'Nossa História',
    p1: 'Nascida nas terras férteis do cerrado brasileiro, a Semiglobe Brasil é mais do que uma marca de café — é uma celebração da alma brasileira. Desde 2008, selecionamos os grãos mais nobres das fazendas familiares de Minas Gerais, Bahia e São Paulo.',
    p2: 'Cada lote é cuidadosamente colhido à mão, torrado com maestria artesanal e embalado para preservar o aroma singular que define nossa identidade. Nosso compromisso vai além da xícara: investimos em comunidades locais, práticas sustentáveis e na preservação da biodiversidade brasileira.',
    p3: 'A Semiglobe Brasil representa a convergência entre tradição centenária e sofisticação contemporânea — um convite para experimentar o melhor que o Brasil tem a oferecer.',
  },
  products: {
    title: 'Coleção Premium',
    subtitle: 'Cada produto é uma obra-prima da natureza brasileira',
    items: [
      {
        name: 'Ouro do Cerrado',
        description: 'Blend exclusivo de grãos arábica das altitudes de Minas Gerais. Notas de chocolate amargo, caramelo e frutas secas. Torra média-escura.',
        price: 'R$ 189,00',
      },
      {
        name: 'Essência da Mata',
        description: 'Single origin da Chapada Diamantina, Bahia. Perfil floral com toques de jasmim e mel silvestre. Torra média, corpo sedoso.',
        price: 'R$ 245,00',
      },
      {
        name: 'Alma Brasileira',
        description: 'Nossa edição limitada. Micro-lote fermentado naturalmente por 72 horas. Complexidade única com notas de vinho do Porto e especiarias.',
        price: 'R$ 320,00',
      },
      {
        name: 'Ritual Matinal',
        description: 'Blend equilibrado para o dia a dia sofisticado. Corpo médio, acidez brilhante, finalização limpa com toque de nozes.',
        price: 'R$ 149,00',
      },
      {
        name: 'Reserva Especial',
        description: 'Envelhecido em barris de carvalho por 6 meses. Sabor profundo e complexo com notas de baunilha, tabaco e cacau.',
        price: 'R$ 420,00',
      },
    ],
  },
  philosophy: {
    title: 'Nossa Filosofia',
    slides: [
      {
        heading: 'Da Terra à Xícara',
        text: 'Acreditamos que cada grão carrega a história da terra que o nutriu. Por isso, mantemos relações diretas com mais de 40 famílias produtoras, garantindo rastreabilidade total e remuneração justa em toda cadeia.',
      },
      {
        heading: 'Sustentabilidade como Essência',
        text: 'Nosso compromisso ambiental não é marketing — é identidade. Utilizamos embalagens 100% recicláveis, compensamos nossa pegada de carbono e investimos na reforestação de áreas degradadas do Cerrado e Mata Atlântica.',
      },
      {
        heading: 'Excelência Artesanal',
        text: 'Em um mundo de produção em massa, escolhemos o caminho da excelência artesanal. Cada lote é provado por nosso painel de Q-Graders certificados, e apenas os que atingem pontuação acima de 85 recebem o selo Semiglobe.',
      },
    ],
  },
  contact: {
    title: 'Entre em Contato',
    subtitle: 'Estamos prontos para criar uma experiência única para você',
    name: 'Seu Nome',
    email: 'Seu E-mail',
    message: 'Sua Mensagem',
    send: 'Enviar Mensagem',
    success: 'Mensagem enviada com sucesso!',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
    tagline: 'A essência do Brasil em cada detalhe.',
  },
};

const en: Translations = {
  nav: {
    about: 'About',
    products: 'Products',
    philosophy: 'Philosophy',
    contact: 'Contact',
  },
  hero: {
    subtitle: 'The essence of Brazil in every detail. Premium coffee, extraordinary lifestyle.',
    cta: 'Discover Our Story',
  },
  about: {
    title: 'Our Story',
    p1: 'Born in the fertile lands of the Brazilian cerrado, Semiglobe Brasil is more than a coffee brand — it is a celebration of the Brazilian soul. Since 2008, we have selected the finest beans from family farms in Minas Gerais, Bahia, and São Paulo.',
    p2: 'Each batch is carefully hand-picked, masterfully roasted, and packaged to preserve the singular aroma that defines our identity. Our commitment goes beyond the cup: we invest in local communities, sustainable practices, and the preservation of Brazilian biodiversity.',
    p3: 'Semiglobe Brasil represents the convergence of century-old tradition and contemporary sophistication — an invitation to experience the best that Brazil has to offer.',
  },
  products: {
    title: 'Premium Collection',
    subtitle: 'Each product is a masterpiece of Brazilian nature',
    items: [
      {
        name: 'Cerrado Gold',
        description: 'Exclusive blend of arabica beans from the highlands of Minas Gerais. Notes of dark chocolate, caramel, and dried fruits. Medium-dark roast.',
        price: 'R$ 189.00',
      },
      {
        name: 'Forest Essence',
        description: 'Single origin from Chapada Diamantina, Bahia. Floral profile with touches of jasmine and wild honey. Medium roast, silky body.',
        price: 'R$ 245.00',
      },
      {
        name: 'Brazilian Soul',
        description: 'Our limited edition. Naturally fermented micro-lot for 72 hours. Unique complexity with notes of Port wine and spices.',
        price: 'R$ 320.00',
      },
      {
        name: 'Morning Ritual',
        description: 'Balanced blend for the sophisticated everyday. Medium body, bright acidity, clean finish with a touch of nuts.',
        price: 'R$ 149.00',
      },
      {
        name: 'Special Reserve',
        description: 'Aged in oak barrels for 6 months. Deep and complex flavor with notes of vanilla, tobacco, and cocoa.',
        price: 'R$ 420.00',
      },
    ],
  },
  philosophy: {
    title: 'Our Philosophy',
    slides: [
      {
        heading: 'From Earth to Cup',
        text: 'We believe every bean carries the story of the land that nurtured it. That is why we maintain direct relationships with over 40 farming families, ensuring full traceability and fair compensation throughout the chain.',
      },
      {
        heading: 'Sustainability as Essence',
        text: 'Our environmental commitment is not marketing — it is identity. We use 100% recyclable packaging, offset our carbon footprint, and invest in the reforestation of degraded areas of the Cerrado and Atlantic Forest.',
      },
      {
        heading: 'Artisanal Excellence',
        text: 'In a world of mass production, we choose the path of artisanal excellence. Each lot is tasted by our panel of certified Q-Graders, and only those scoring above 85 receive the Semiglobe seal.',
      },
    ],
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'We are ready to create a unique experience for you',
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    send: 'Send Message',
    success: 'Message sent successfully!',
  },
  footer: {
    rights: 'All rights reserved.',
    tagline: 'The essence of Brazil in every detail.',
  },
};

export const translations: Record<Language, Translations> = { pt, en };
