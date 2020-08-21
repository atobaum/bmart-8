import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

type Banner = {
  type: string;
  altString: string;
  imgUrl: string;
  routeUrl: string;
};

export default {
  Query: {
    mainBanners: async (): Promise<Banner[]> => {
      //     const data = await prisma.banner.count();
      //   const data = await prisma.category_first.findMany({
      //     include: { children: true },
      //   });
      //   const data = await prisma.banner.findMany();
      return [
        {
          type: 'main',
          altString: '초코과자 배달 가능',
          imgUrl:
            'https://bmart-8.s3.ap-northeast-2.amazonaws.com/assets/banners/0afd9b79-ff7d-42ac-99e1-7147de6a6476.gif',
          routeUrl: '/',
        },
        {
          type: 'main',
          altString: '책도 배달 가능',
          imgUrl:
            'https://bmart-8.s3.ap-northeast-2.amazonaws.com/assets/banners/0b776996-d151-447f-8f6a-0bb3ebdbf568.gif',
          routeUrl: '/',
        },
        {
          type: 'main',
          altString: '추억의 과자',
          imgUrl:
            'https://bmart-8.s3.ap-northeast-2.amazonaws.com/assets/banners/1c5c8ab7-913a-422c-bee3-9a47220abdc9.gif',
          routeUrl: '/',
        },
      ];
    },
  },
};
