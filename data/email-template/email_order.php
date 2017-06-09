<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<p style="font-size: 20px; font-weight: bold">Cảm ơn quý khách {fullname} đã đặt hàng tại Kaylee Shoes</p>
<p>
    Kaylee Shoes rất vui thông báo đơn hàng <strong>#{order_code}</strong> của quý khách đã được tiếp nhận và đang trong quá trình xử lý. <strong>Kaylee Shoes</strong> sẽ thông báo đến quý khách ngay khi hàng chuẩn bị được giao.
</p>

<div style="margin-top:20px; padding-bottom: 10px">
    <b style="font-size: 13px; color: black;">THÔNG TIN ĐƠN HÀNG - #{order_code} - {time}</b>
</div>
<table width="100%" border="1" cellpadding="4" cellspacing="4" style="border-collapse: collapse;">
    <tr>
        <th width="50%">Thông tin thanh toán</th>
        <th>Địa chỉ giao hàng</th>
    </tr>
    <tr>
        <td valign="top">
            <table cellspacing="2" cellpadding="2">
                <tr><td>Phương thức thanh toán:</td><td>{paymentMethod}</td></tr>
                <tr><td>Thời gian giao hàng:</td><td>{time_from} - {time_to}</td></tr>
                <tr><td>Ghi chú:</td><td>{note}</td></tr>
            </table>
        </td>
        <td>
            <table cellspacing="2" cellpadding="2">
                <tr><td>Họ tên:</td><td>{fullname}</td></tr>
                <tr><td>Điện thoại:</td><td>{phone}</td></tr>
                <tr><td>Email:</td><td>{email}</td></tr>
                <tr><td>Địa chỉ:</td><td>{address}</td></tr>
                <tr><td>Quận:</td><td>{district}</td></tr>
            </table>
        </td>
    </tr>
</table>

<p><em>Lưu ý: Với những đơn hàng thanh toán trả trước, xin vui lòng đảm bảo người nhận hàng đúng thông tin đã đăng ký trong đơn hàng, và chuẩn bị giấy tờ tùy thân để đơn vị giao nhận có thể xác thực thông tin khi giao hàng.
Hàng mua qua hình thức online được áp dụng chính sách đổi trả và bảo hành như sản phẩm mua tại cửa hàng chính thức. Vui lòng kiểm tra kỹ sản phầm đúng yêu cầu đặt hàng khi nhận hàng.</em></p>

<div style="margin-top:20px; padding-bottom: 10px">
    <b style="font-size: 13px; color: black;">CHI TIẾT ĐƠN HÀNG</b>
</div>
<div class="paymentinfo" style="margin-top: 5px; line-height: 1.7; color: black;">
    <table width="100%" border="1" cellpadding="4" cellspacing="4" style="border-collapse: collapse;">
        <thead>
        <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền (VND)</th>
        </tr>
        </thead>
        <tbody>
        {content}
        <tr><td colspan="3" align="right">Tổng tiền(VND)</td><td>{amount}</td></tr>
        <tr><td colspan="3" align="right">Phí vận chuyển(VND)</td><td>{fee}</td></tr>
        <tr><td colspan="3" align="right">Tổng cộng(VND)</td><td>{amountTotal}</td></tr>
        </tbody>
    </table>
</div>

<p>Trường hợp quý khách có những băn khoăn về đơn hàng, có thể liên hệ trực tiếp số điện thoại 091 9663322 hoặc hotline 1900636509 (8-21h cả T7,CN). Đội ngũ Kaylee Shoes Care luôn sẵn sàng hỗ trợ bạn bất kì lúc nào.</p>

<p style="font-weight: bold">Một lần nữa Kaylee Shoes cảm ơn quý khách.</p>