import { render } from '@testing-library/react';

import SchoolLandingPageComponents from './school-landing-page-components';

describe('SchoolLandingPageComponents', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<SchoolLandingPageComponents />);
    expect(baseElement).toBeTruthy();
  });
  
});
