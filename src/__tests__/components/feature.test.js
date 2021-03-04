import React from 'react'
import { render } from '@testing-library/react'
import { Feature } from '../../components/feature'

describe('<Feature />', () => {
  it('renders the <Feature /> with populated data', () => {
    const { container, getByText } = render(
      <Feature>
        <Feature.Title>Simple Blog</Feature.Title>
        <Feature.SubTitle>
          At vero eos et accusamus et iusto odio
        </Feature.SubTitle>
      </Feature>
    )

    expect(getByText('Simple Blog')).toBeTruthy()
    expect(getByText('At vero eos et accusamus et iusto odio')).toBeTruthy()
    expect(container.firstChild).toMatchSnapshot()
  })
})
