<template>
<el-row :grunt="15" class="body">
    <el-col :span="24" class="first_content">
        <el-row :grunt="15">
            <el-col :span="24" class="txt_center">
                <span class="txt_title font_25">Tổng số Booking</span>
            </el-col>
            <el-col :span="24" class="txt_center">
                <span class="txt_title font_150 font-weight">{{this.dataCarousel.bookingAll.values.toLocaleString()}}</span>
            </el-col>
            <el-col :span="24">
                <table style="width: 100%">
                    <tr style="padding: 20px 0">
                        <td align="center" class="header_table"> <span class="font_25">Mới</span> </td>
                        <td align="center" class="header_table"> <span class="font_25">Thành công</span> </td>
                        <td align="center" class="header_table"> <span class="font_25">Đang xử lý</span> </td>
                        <td align="center" class="header_table"> <span class="font_25">Đã thanh toán</span> </td>
                        <td align="center" class="header_table"> <span class="font_25">Hủy</span> </td>
                    </tr>
                    <tr>
                        <td align="center" class="border_right_black"> 
                            <span class="font-weight txt_title font_75 color_black">
                                {{this.dataCarousel.bookingNew.values.toLocaleString()}}</span> </td>
                        <td align="center" class="border_right_black"> 
                            <span class="font-weight txt_title font_75 color_black">
                                {{this.dataCarousel.bookingSuccess.values.toLocaleString()}}</span> </td>
                        <td align="center" class="border_right_black">
                            <span class="font-weight txt_title font_75 color_black">
                                {{this.dataCarousel.bookingPending.values.toLocaleString()}}</span></td>
                        <td align="center" class="border_right_black">
                            <span class="font-weight txt_title font_75 color_black">
                                {{this.dataCarousel.bookingPait.values.toLocaleString()}}</span></td>
                        <td align="center">
                            <span class="font-weight txt_title font_75 color_black">
                                {{this.dataCarousel.bookingCancel.values.toLocaleString()}}</span></td>
                    </tr>
                </table>
            </el-col>
        </el-row>
    </el-col>

    <el-col :span="24" class="second_content">
        <table style="width: 100%">
            <tr>
                <td align="center" class="header_table"> <span class="font_25 color_fff">Xe hợp đồng</span> </td>
                <td align="center" class="header_table"> <span class="font_25 color_fff">Đối tác</span> </td>
                <td align="center" class="header_table"> <span class="font_25 color_fff">Phương tiện</span> </td>
                <td align="center" class="header_table"> <span class="font_25 color_fff">Cài App</span> </td>
                <td align="center" class="header_table"> <span class="font_25 color_fff">Xóa App</span> </td>
            </tr>
            <tr>
                <td align="center" class="border_right_white"> 
                    <span class="font-weight txt_title font_75 color_fff">
                        {{this.dataCarousel.carrental.values.toLocaleString()}}</span> </td>
                <td align="center" class="border_right_white"> 
                    <span class="font-weight txt_title font_75 color_fff">
                        {{this.dataCarousel.merchants.values.toLocaleString()}}</span> </td>
                <td align="center" class="border_right_white">
                    <span class="font-weight txt_title font_75 color_fff">
                        {{this.dataCarousel.vehicle.values.toLocaleString()}}</span></td>
                <td align="center" class="border_right_white">
                    <span class="font-weight txt_title font_75 color_fff">
                        {{this.dataCarousel.openApp.values.toLocaleString()}}</span></td>
                <td align="center">
                    <span class="font-weight txt_title font_75 color_fff">
                        {{this.dataCarousel.removeApp.values.toLocaleString()}}</span></td>
            </tr>
        </table>
    </el-col>
</el-row>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            dataCarousel: {
                carrental: {
                    text: 'SỐ BOOKING CARRENTAL',
                    values: 0
                },
                bookingAll: {
                    text: 'SỐ BOOKING KHÁCH ĐẶT',
                    values: 0
                },
                bookingNew: {
                    text: 'SỐ BOOKING MỚI HIỆN TẠI',
                    values: 0
                },
                bookingPending: {
                    text: 'SỐ BOOKING ĐANG CHỜ THANH TOÁN',
                    values: 0
                },
                bookingPait: {
                    text: 'SỐ BOOKING ĐÃ THANH TOÁN',
                    values: 0
                },
                bookingSuccess: {
                    text: 'SỐ BOOKING THÀNH CÔNG',
                    values: 0
                },
                bookingCancel: {
                    text: 'SỐ BOOKING HỦY',
                    values: 0
                },
                merchants: {
                    text: 'SỐ NHÀ XE',
                    values: 0
                },
                vehicle: {
                    text: 'SỐ PHƯƠNG TIỆN',
                    values: 0
                },
                carrental: {
                    text: 'SỐ BOOKING CARRENTAL',
                    values: 0
                },
                openApp: {
                    text: 'SỐ USER CÀI APP',
                    values: 3067
                },
                removeApp: {
                    text: 'SỐ GỠ BỎ APP',
                    values: 781
                }
            }
        }
    },

    mounted() {
        this.fetchData()

        setInterval(() => {
            this.fetchData()
        }, 10000);
    },

    methods: {
        fetchData() {
            this.$axios.$get('screen').then((res) => {
                this.dataCarousel.carrental.values = res.carrental
                this.dataCarousel.bookingAll.values = res.bookingAll
                this.dataCarousel.bookingCancel.values = res.bookingCancel
                this.dataCarousel.bookingNew.values = res.bookingNew
                this.dataCarousel.bookingPait.values = res.bookingPait
                this.dataCarousel.bookingPending.values = res.bookingPending
                this.dataCarousel.bookingSuccess.values = res.bookingSuccess
                this.dataCarousel.merchants.values = res.merchants
                //this.dataCarousel.openApp.values = res.openApp
                //this.dataCarousel.removeApp.values = res.removeApp
                this.dataCarousel.vehicle.values = res.vehicle
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
.font-weight {
    font-weight: bold;
}

.body {
    font-family: 'Montserrat', sans-serif;
}

.first_content {
    background: #EBAF00;
    padding: 50px;
    height: calc(100vh - 300px);
}

.second_content {
    background: #0C0D12;
    padding: 80px;
    height: 300px;
}

.container {
    padding: 25px;
    text-align: center
}

.txt_title {
    text-align: center;
    margin: 50px 0;
}

.txt_value {
    color: #EBAF00;
    font-size: 300px;
    margin: 0;
    font-weight: bold;
}

.el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
}

.font_25 {
    font-size: 25px;
}

.font_250 {
    font-size: 250px;
}

.header_table {
    padding-bottom: 20px;
}

.font_150 {
    font-size: 150px;
}

.font_75 {
    font-size: 75px;
}

.el-carousel__item:nth-child(2n) {
    border-radius: 5px;
    background: #0C0D12;
}

.el-carousel__item:nth-child(2n+1) {
    border-radius: 5px;
    background: #0C0D12;
}

.txt_center {
    text-align: center
}

.color_fff {
    color: #ffffff;
}

.color_black {
    color: #0C0D12;
}

.border_right_black {
    border-right: 2px solid #0C0D12;
}

.border_right_white {
    border-right: 2px solid #ffffff;
}
</style>
