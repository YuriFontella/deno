const hasRole = (role: string) => (next) => (source, args, context, info) => {

  if (!context.token || role) {

    return next(source, args, context, info)
  }

  throw new Error('Você não tem autorização para isso')
}

export { hasRole }
