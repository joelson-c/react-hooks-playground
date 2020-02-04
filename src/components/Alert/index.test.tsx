import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notification from '.';

describe('Notification', () => {
  test('should render with a text and close button', () => {
    const expectedText = "test notify";
    const { getByText } = render(
      <Notification text={expectedText} />
    );

    expect(getByText(expectedText)).toBeInTheDocument();
  });

  test('should close, when the user clicks on the close button', () => {
    const expectedText = "test notify";
    const { getByLabelText, queryByText } = render(
      <Notification text={expectedText} />
    );

    fireEvent.click(getByLabelText('close'));

    expect(queryByText(expectedText)).toBeNull();
  });
});