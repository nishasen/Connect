export const GetAvatar = (userId, allUser) => allUser?.find(user => user?.userId===userId)?.data.avatar;