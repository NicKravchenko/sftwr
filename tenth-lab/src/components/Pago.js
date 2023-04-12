import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Pago = ({ formDaata }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const location = useLocation();
  const formData = location.state.formData;
  console.log(formData);
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
    <input type="hidden" name="return" value="http%3A//localhost%3A3000/reporte" />
    <input type="hidden" name="notify_url" value="http%3A//www.superplazas.com/masterpages/default.aspx" />
    <input type="hidden" name="no_note" value="1" />
    <input type="hidden" name="no_shipping" value="1" />
    <input type="hidden" name="rm" value="5" />
    <input type="hidden" name="first_name" value="${nombres}" />
    <input type="hidden" name="last_name" value="${apellidos}" />
    <input type="hidden" name="zip" value="N/A" />
    <input type="hidden" name="amount" value="${precio}" />
  </form>
  <script language="javascript">document.frmsubmit.submit();</script>
  `;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: formHtml,
      }}
    ></div>
  );
};

export default Pago;
