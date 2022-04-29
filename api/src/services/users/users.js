import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  // TODO: Figure out how to handle repos
  delete input.repos

  return db.user.create({
    data: {
      id: input.id,
    },
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}
