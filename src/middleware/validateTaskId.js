export function validateTaskId(req, res, next) {
  const id = req.params.id;
  if (isNaN(parseInt(id, 10))) {
    return res.status(400).json({
      error: 'Validation failed',
      details: ['ID must be a number'],
    });
  }
  next();
}
