<template>
  <main>
    <!-- Hero card -->
      <div class="relative">
        <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div class="absolute inset-0">
              <img class="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops">
              <div class="absolute inset-0 bg-indigo-700 mix-blend-multiply"></div>
            </div>
            <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span class="block text-white">DEDE POS</span>
                <span class="block text-indigo-200">ระบบขายหน้าร้าน</span>
              </h1>
              <p class="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                ใช้ได้หลาย Platform ทั้งระบบ iOS, Android, Windows, Ubuntu <br>
                เหมาะกับทั้งร้านขนาดเล็กและร้านขนาดใหญ่
              </p>
              <div class="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo cloud -->
      <!-- <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">ใช้งานได้ทั้งธุรกิจขนาดเล็กและขนาดใหญ่</p>
          <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple">
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage">
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit">
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor">
            </div>
            <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation">
            </div>
          </div>
        </div>
      </div> -->
      
      <!-- Features section -->
      <div id="features" class="py-16 bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">คุณสมบัติเด่น</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">DeDe POS ระบบขายหน้าร้านครบวงจร</p>
          </div>
          
          <div class="mt-12">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <!-- Feature 1: Multi-platform -->
              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">ใช้ได้หลาย Platform</h3>
                    <p class="mt-5 text-base text-gray-500">
                      ใช้ได้ทั้งระบบ iOS, Android, Windows, Ubuntu<br>
                      ร้านเล็กแนะนำ Android, iOS<br>
                      ร้านขนาดใหญ่แนะนำ Windows, Ubuntu
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Feature 2: Promotions -->
              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">โปรโมชั่น ลด, แถม</h3>
                    <p class="mt-5 text-base text-gray-500">
                      สามารถกำหนดสูตรโปรโมชั่นได้หลายแบบ<br>
                      รองรับโปรโมชั่นซับซ้อน<br>
                      ปรับแต่งตามความต้องการของธุรกิจ
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Feature 3: Payment Methods -->
              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">รับชำระเงินได้หลายแบบ</h3>
                    <p class="mt-5 text-base text-gray-500">
                      Prompt Pay พร้อมจำนวนเงิน เพื่อลดความผิดพลาด<br>
                      รับชำระเงินสด, เงินโอน, คูปอง, บัตรเครดิต<br>
                      Alipay, WeChat
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Feature 4: Shift System -->
              <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div class="-mt-6">
                    <div>
                      <span class="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">ระบบกะทำงาน</h3>
                    <p class="mt-5 text-base text-gray-500">
                      เปิดกะ, ปิดกะ<br>
                      เติมเงิน, นำเงินออก<br>
                      สรุปยอดขายแต่ละกะอย่างแม่นยำ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Demo section -->
      <div id="demo" class="bg-indigo-50 py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">ทดลองใช้งาน</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">พร้อมให้บริการแล้ววันนี้</p>
            <p class="mt-4 text-lg text-gray-500">ติดต่อเราเพื่อขอทดลองใช้งานฟรี 30 วัน</p>
            <div class="mt-8 flex justify-center">
              <div class="inline-flex rounded-md shadow">
                <a href="#contact" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                  ติดต่อเรา
                </a>
              </div>
              <div class="ml-3 inline-flex">
                <a href="/privacy" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50">
                  เอกสาร
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Contact section -->
      <div id="contact" class="bg-white py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">ติดต่อเรา</h2>
            <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">ต้องการข้อมูลเพิ่มเติม?</p>
            <p class="mt-4 text-lg text-gray-500">ส่งข้อความถึงเราเพื่อรับข้อมูลเพิ่มเติมหรือนัดหมายสาธิตการใช้งาน</p>
          </div>
          <div class="mt-12 max-w-lg mx-auto">
            <form action="#" method="POST" class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
              <div>
                <label for="first-name" class="block text-sm font-medium text-gray-700">ชื่อ</label>
                <div class="mt-1">
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div>
                <label for="last-name" class="block text-sm font-medium text-gray-700">นามสกุล</label>
                <div class="mt-1">
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="company" class="block text-sm font-medium text-gray-700">บริษัท</label>
                <div class="mt-1">
                  <input type="text" name="company" id="company" autocomplete="organization" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="email" class="block text-sm font-medium text-gray-700">อีเมล</label>
                <div class="mt-1">
                  <input id="email" name="email" type="email" autocomplete="email" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="phone-number" class="block text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
                <div class="mt-1 relative rounded-md shadow-sm">
                  <input type="text" name="phone-number" id="phone-number" autocomplete="tel" class="py-3 px-4 block w-full focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md" placeholder="+66 xx xxx xxxx">
                </div>
              </div>
              <div class="sm:col-span-2">
                <label for="message" class="block text-sm font-medium text-gray-700">ข้อความ</label>
                <div class="mt-1">
                  <textarea id="message" name="message" rows="4" class="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"></textarea>
                </div>
              </div>
              <div class="sm:col-span-2">
                <button type="submit" class="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  ส่งข้อความ
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

  </main>    
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
