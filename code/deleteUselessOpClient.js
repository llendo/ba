[...]
  if (
    !!recentMatchingOperation &&
    mappedOperation.timestamp > recentMatchingOperation.timestamp
  ) {
    deleteOperation(recentMatchingOperation._id);
  }
[..]