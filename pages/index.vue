<template>
<el-carousel :interval="5000" type="card" height="calc(100vh - 27px)" style="background: #EBAF00" @change="fetchData">
    <el-carousel-item v-for="(item, key, index) in dataCarousel" :key="index">
        <el-row :grunt="15">
            <el-col :span="24">
                <h1 class="txt_title">{{ item.text }}</h1>
            </el-col>
            <el-col :span="24">
                <div class="container">
                    <span v-if="item.values < 100" class="txt_value font_300">{{ item.values.toLocaleString() }}</span>
                    <span v-if="item.values >= 100 && item.values < 1000" class="txt_value font_250">{{ item.values.toLocaleString() }}</span>
                    <span v-if="item.values >= 1000 && item.values < 10000" class="txt_value font_200">{{ item.values.toLocaleString() }}</span>
                    <span v-if="item.values >= 10000 && item.values < 100000" class="txt_value font_150">{{ item.values.toLocaleString() }}</span>
                    <span v-if="item.values >= 100000" class="txt_value font_100">{{ item.values.toLocaleString() }}</span>
                </div>
            </el-col>
        </el-row>
    </el-carousel-item>
</el-carousel>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            carouselData: [{
                    text: 'Số lượng cài đặt App IOS',
                    values: 999
                },
                {
                    text: 'Số lượng cài đặt App Android',
                    values: 99
                },
                {
                    text: 'Số lượng đơn hàng sàn',
                    values: 9999
                },
                {
                    text: 'Số đơn hàng carrental',
                    values: 80
                },
                {
                    text: 'Số đơn hàng thành công',
                    values: 99999
                },
                {
                    text: 'Số đơn hàng hủy',
                    values: 999999
                },
                {
                    text: 'Tổng số nhà xe',
                    values: 80
                },
                {
                    text: 'Tổng số xe',
                    values: 80
                },
                {
                    text: 'Số lượt gỡ App',
                    values: 80
                }
            ],

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
                    values: 0
                },
                removeApp: {
                    text: 'SỐ GỠ BỎ APP',
                    values: 0
                }
            }
        }
    },

    methods: {
        fetchData(e) {
            this.$axios.$get('screen').then((res) => {
                this.dataCarousel.carrental.values = res.carrental
                this.dataCarousel.bookingAll.values = res.bookingAll
                this.dataCarousel.bookingCancel.values = res.bookingCancel
                this.dataCarousel.bookingNew.values = res.bookingNew
                this.dataCarousel.bookingPait.values = res.bookingPait
                this.dataCarousel.bookingPending.values = res.bookingPending
                this.dataCarousel.bookingSuccess.values = res.bookingSuccess
                this.dataCarousel.merchants.values = res.merchants
                this.dataCarousel.openApp.values = res.openApp
                this.dataCarousel.removeApp.values = res.removeApp
                this.dataCarousel.vehicle.values = res.vehicle
            }).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style>
.container {
    padding: 25px;
    text-align: center
}

.txt_title {
    color: #fff;
    font-size: 40px;
    text-align: center;
    text-transform: uppercase;
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

.font_300 {
    font-size: 300px;
}

.font_250 {
    font-size: 250px;
}

.font_200 {
    font-size: 200px;
}

.font_150 {
    font-size: 150px;
}

.font_100 {
    font-size: 125px;
}

.el-carousel__item:nth-child(2n) {
    border-radius: 5px;
    background: #0C0D12;
}

.el-carousel__item:nth-child(2n+1) {
    border-radius: 5px;
    background: #0C0D12;
}
</style>
