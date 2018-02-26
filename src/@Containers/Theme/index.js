import { compose } from 'react-apollo';
import { colors } from '@dux/queries';
import Theme from './Theme';

export default compose(colors)(Theme);
