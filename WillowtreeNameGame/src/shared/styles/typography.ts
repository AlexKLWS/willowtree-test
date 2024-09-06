import { StyleSheet } from 'react-native';
import { scale } from '~/utils/scale';
import colors from './colors';

const typography = StyleSheet.create({
  H1: { fontSize: scale(34), color: colors.ui.black, fontWeight: 700 },
  button: {
    fontSize: scale(17),
    color: colors.ui.white,
  },
  label: {
    fontSize: scale(17),
    color: colors.ui.white,
  },
  headerLabel: {
    fontSize: scale(17),
    color: colors.ui.black,
    fontWeight: 600,
  },
});

export default typography;
