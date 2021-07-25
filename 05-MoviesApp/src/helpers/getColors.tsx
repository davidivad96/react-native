import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri);
  return colors.platform === 'android'
    ? [colors.dominant, colors.average]
    : [colors.primary, colors.secondary];
};
