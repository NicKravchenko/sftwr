import React from "react";

const PayPalButton = ({ formData }) => {
  const {
    OrderNumber,
    nombres,
    apellidos,
    precio,
  } = formData;

  const formHtml = `
    <form name="frmsubmit" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_xclick" />
      <input type="hidden" name="business" value="ccomas@gmail.com" />
      <input type="hidden" name="currency_code" value="USD" />
      <input type="hidden" name="item_name" value="Orden en SuperPlazas.com" />
      <input type="hidden" name="item_number" value="${OrderNumber}" />
      <input type="hidden" name="custom" value="" />
      <input type="hidden" name="image_url" value="https://superplazas.com/images/logo.png" />
      <input type="hidden" name="return" value="https%3A//www.superplazas.com/masterpages/lastcompleteorder.aspx" />
      <input type="hidden" name="notify_url" value="https%3A//www.superplazas.com/masterpages/default.aspx" />
      <input type="hidden" name="no_note" value="1" />
      <input type="hidden" name="no_shipping" value="1" />
      <input type="hidden" name="rm" value="5" />
      <input type="hidden" name="first_name" value="${nombres}" />
      <input type="hidden" name="last_name" value="${apellidos}" />
      <input type="hidden" name="zip" value="N/A" />
      <input type="hidden" name="amount" value="${precio}" />
      <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
    </form>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: formHtml,
      }}
    ></div>
  );
};

export default PayPalButton;
