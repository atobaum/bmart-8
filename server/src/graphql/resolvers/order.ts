import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface OrderReadArgs {
  id: number;
}

interface OrderCreateArgs {
  status: number;
  address: string;
  zipcode: string;
  name: string;
  phone_number: string;
}

interface OrderDeleteArgs {
  id: number;
}

interface OrderProductCreateArgs {
  count: number;
  order_id: number;
  product_id: number;
}

interface OrderProductUpdateArgs {
  id: number;
  count: number;
}

interface OrderProductDeleteArgs {
  id: number;
}

export default {
  Query: {
    orders: (parent: any, args: any, context: any) =>
      prisma.order.findMany({
        where: { user_id: context.user.id },
        include: { order_product: true },
      }),
    order: (parent: any, { id }: OrderReadArgs, context: any) =>
      prisma.order.findOne({
        where: { id },
        include: { order_product: true },
      }),
  },
  Mutation: {
    CreateOrder: (parent: any, args: OrderCreateArgs, context: any) =>
      prisma.order.create({
        data: {
          ...args,
          user: { connect: { id: context.user.id } },
        },
      }),
    DeleteOrder: (parent: any, { id }: OrderDeleteArgs, context: any) =>
      prisma.order.delete({ where: { id } }),
    CreateOrderProduct: (
      parent: any,
      { count, order_id, product_id }: OrderProductCreateArgs,
      context: any
    ) =>
      prisma.order_product.create({
        data: {
          count,
          order: { connect: { id: order_id } },
          product: { connect: { id: product_id } },
        },
      }),
    UpdateOrderProduct: (
      parent: any,
      { id, count }: OrderProductUpdateArgs,
      context: any
    ) => prisma.order_product.update({ where: { id }, data: { count } }),
    DeleteOrderProduct: (
      parent: any,
      { id }: OrderProductDeleteArgs,
      context: any
    ) => prisma.order_product.delete({ where: { id } }),
  },
};
