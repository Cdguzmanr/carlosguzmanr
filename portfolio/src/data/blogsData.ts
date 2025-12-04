// src/projects.ts
import type { Blog } from '../types/IBlog'; // Import the interface

// Import images
import NoImage from '../assets/images/noImage.jpg';
import InfoIBLogo from '../assets/images/blog/InfoIBLogo.png';
import InfoIBArticle from '../assets/images/blog/InfoIBArticle.png';
import IBLogo from '../assets/images/blog/IB-Logo.jpg';
import BIPalmares from '../assets/images/blog/InfoIBLogo.png';


export const blogsData: Blog[] = [
    {
        id: 1,
        display: false,
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        short: "Test",
        images: [],
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum neque ligula, sed sagittis massa accumsan quis. Curabitur ornare aliquam convallis. Vestibulum egestas quam eget risus eleifend dapibus. Donec nunc urna, molestie nec facilisis dictum, ultricies quis orci. Integer semper erat quis purus suscipit fringilla. Suspendisse ac dictum arcu, nec ornare libero. Nam elementum eros diam, sit amet commodo augue suscipit non. Aliquam gravida pretium dolor at lobortis. Morbi sodales volutpat ante vitae placerat. Aliquam viverra viverra gravida. Proin nisi orci, semper at enim eget, congue porta dolor. Donec vel sapien condimentum, venenatis dui sed, fringilla odio.\n\nIn ac odio diam. Aenean a justo urna. Cras dui leo, hendrerit ut lacus quis, vehicula mollis elit. Quisque tempus ut mauris sit amet efficitur. Aliquam commodo risus nec dolor dignissim lobortis pretium vel lacus. Vivamus semper nisl lectus, eu mollis felis auctor et. Sed non odio cursus, mollis elit vitae, tempus est.\n\nVivamus fermentum, lorem sed lobortis condimentum, purus lacus pretium lacus, at pellentesque libero ligula sed justo. Quisque et ornare est. Ut lobortis, massa vitae ornare finibus, orci urna bibendum diam, nec malesuada tortor ipsum eu lectus. Maecenas lacinia pellentesque faucibus. Sed sit amet imperdiet orci, pharetra tempor lectus. Fusce hendrerit tincidunt turpis quis lobortis. In non purus in diam feugiat venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum est eros, vitae elementum dolor posuere non. Etiam tempor eget eros vitae fermentum. Proin consequat dui ut mi elementum, eu maximus nunc mattis. Vestibulum egestas ligula dui, sit amet fermentum ante sodales et. Fusce dignissim diam magna, at varius justo eleifend ut.\n\nMaecenas iaculis est quis sapien egestas mollis. Donec ac pharetra lectus. Donec a neque dui. Donec eu sapien in neque sagittis feugiat. Cras purus purus, euismod vitae felis nec, consequat porta erat. Praesent molestie elementum ligula ac egestas. Cras turpis metus, consectetur ac tellus a, tristique ullamcorper eros. Fusce maximus placerat felis, eu vestibulum ante bibendum non. Cras vel feugiat lectus. Integer velit quam, vehicula varius tellus a, ultrices tempus lacus. Fusce sed dictum ipsum. Duis eu posuere tellus.`,
        links: [
          {
            title: "Read Full Story",
            url: "https://example.com/full-story",
            image: NoImage
          },
        ]
      },
      {
        id: 2,
        display: true,
        title: "Study Abroad Project: Info IB",
        short: "Project Info IB",
        images: [InfoIBLogo, InfoIBArticle],
        body: "**One of the most impactful projects** I started, *and a turning point in my life*, was Info IB. This initiative comes from my *passion for studying abroad* since I was 15. For over four years, I invested much of my free time researching pathways to study abroad, often dealing with limited resources and guidance. This pursuit was discouraging at times, yet each new discovery fueled my determination and hope of reaching my dreams.\n\nWhen I joined the **International Baccalaureate (IB) Program**, I discovered many classmates shared my ambition but felt lost and discouraged by the lack of information. With years of personal research behind me, I realized I could support my peers by *sharing my knowledge* to help them overcome the same hurdles I faced.\n\nAt the start of my senior year, I partnered with a friend to launch **Info IB—a project aiming to gather and share study abroad resources for IB students**. We created a section on our school's IB website to post information and webinar notes I had collected over the years to help students explore some of these options. This online resource became a valuable tool for our school, offering guidance and access to a network of educational opportunities. As Info IB grew, I recruited younger students from other classes to expand our project, creating a passionate team to carry over Info IB after my graduation.\n\nLooking for new resources, I came across _[Yondders ](https://www.yondders.com)_, a small non-profit focused on international studies. I met with Marcia Herra, Yondders' founder, and presented Info IB. She **loved our project's vision**, so her team agreed to host a conference at our school and **offer free one-on-one meetings** for interested students.\n\nIn preparation, Info IB gave presentations to **more than 100 IB students** at our school about study-abroad opportunities and introduced Yondders. As a result, the conference was **a huge success**—over 70 students attended, setting a record for Yondders. The team was **impressed by our school's preparation and engagement**, something they hadn't seen before. This success led to a *close partnership with Yondders*. Info IB promoted Yondders' activities in our school and community, boosting their impact on a broader audience, and Yondders provided our institution with bigger and updated educational resources. **Info IB was so successful that, by the end of the year, I managed to secure a full scholarship to study abroad using the resources we had collected**.\n\nReflecting on Info IB, I am proud of our accomplishments, but I see potential for even more growth. With my current knowledge and experience, I would expand the project by building partnerships with more scholarship organizations and universities. I want to provide students with a broader array of resources and direct connections. I would also recruit experts in marketing, international relations, IT specialists, and other fields to address the technical needs that Info IB has today. These improvements would let us provide stronger guidance and expand the project's reach to benefit communities beyond our local area.\n\nThrough Info IB, I learned the power of shared knowledge and collaboration. I experienced firsthand the impact that accessible information can have on a student's path, and I want to help others find theirs.",
        links: [
          {
            title: "Info IB Article",
            url: "https://bipalmares.com/conoce-el-proyecto-cas-info-ib/",
            image: InfoIBArticle
          },
          {
            title: "What is the IB Program?",
            url: "https://www.ibo.org/programmes/diploma-programme/what-is-the-dp/",
            image: IBLogo
          },
          {
            title: "IB Palmares",
            url: "https://bipalmares.com",
            image: BIPalmares
          }
        ]
      },
      {
        id: 3,
        display: false,
        title: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
        short: "Amazing story of my life",
        images: ['/images/noImage.jpg', '/images/noImage.jpg'],
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum neque ligula, sed sagittis massa accumsan quis. Curabitur ornare aliquam convallis. Vestibulum egestas quam eget risus eleifend dapibus. Donec nunc urna, molestie nec facilisis dictum, ultricies quis orci. Integer semper erat quis purus suscipit fringilla. Suspendisse ac dictum arcu, nec ornare libero. Nam elementum eros diam, sit amet commodo augue suscipit non. Aliquam gravida pretium dolor at lobortis. Morbi sodales volutpat ante vitae placerat. Aliquam viverra viverra gravida. Proin nisi orci, semper at enim eget, congue porta dolor. Donec vel sapien condimentum, venenatis dui sed, fringilla odio.\n\nIn ac odio diam. Aenean a justo urna. Cras dui leo, hendrerit ut lacus quis, vehicula mollis elit. Quisque tempus ut mauris sit amet efficitur. Aliquam commodo risus nec dolor dignissim lobortis pretium vel lacus. Vivamus semper nisl lectus, eu mollis felis auctor et. Sed non odio cursus, mollis elit vitae, tempus est.\n\nVivamus fermentum, lorem sed lobortis condimentum, purus lacus pretium lacus, at pellentesque libero ligula sed justo. Quisque et ornare est. Ut lobortis, massa vitae ornare finibus, orci urna bibendum diam, nec malesuada tortor ipsum eu lectus. Maecenas lacinia pellentesque faucibus. Sed sit amet imperdiet orci, pharetra tempor lectus. Fusce hendrerit tincidunt turpis quis lobortis. In non purus in diam feugiat venenatis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam bibendum est eros, vitae elementum dolor posuere non. Etiam tempor eget eros vitae fermentum. Proin consequat dui ut mi elementum, eu maximus nunc mattis. Vestibulum egestas ligula dui, sit amet fermentum ante sodales et. Fusce dignissim diam magna, at varius justo eleifend ut.\n\nMaecenas iaculis est quis sapien egestas mollis. Donec ac pharetra lectus. Donec a neque dui. Donec eu sapien in neque sagittis feugiat. Cras purus purus, euismod vitae felis nec, consequat porta erat. Praesent molestie elementum ligula ac egestas. Cras turpis metus, consectetur ac tellus a, tristique ullamcorper eros. Fusce maximus placerat felis, eu vestibulum ante bibendum non. Cras vel feugiat lectus. Integer velit quam, vehicula varius tellus a, ultrices tempus lacus. Fusce sed dictum ipsum. Duis eu posuere tellus.`,
        links: [],
      },
]