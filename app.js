/* =====================================================================
   FelFel Manager — Ultimate Complete Version
   Full CRUD + Edit/Delete + Charts + Alerts + PIN + Backup + i18n
   ===================================================================== */

/* ========== i18n ========== */
const I18N = {
  ar: {
    'brand.tagline':'مانجر',
    'nav.dashboard':'لوحة التحكم','nav.inventory':'الإنتاج والمخزون','nav.sales':'المبيعات والفواتير',
    'nav.customers':'العملاء والديون','nav.expenses':'المصروفات','nav.cashbox':'الخزنة',
    'nav.workers':'العمال والأجور','nav.partners':'الشركاء والأرباح','nav.reports':'التقارير',
    'nav.activity':'سجل النشاط','nav.settings':'الإعدادات والنسخ',
    'common.add':'إضافة','common.edit':'تعديل','common.delete':'حذف','common.save':'حفظ',
    'common.cancel':'إلغاء','common.search':'بحث','common.close':'إغلاق','common.export':'تصدير CSV',
    'common.date':'التاريخ','common.notes':'ملاحظات','common.amount':'المبلغ','common.qty':'الكمية',
    'common.status':'الحالة','common.actions':'إجراءات','common.empty':'لا توجد بيانات','common.total':'الإجمالي',
    'currency':'ج.م',
    'dashboard.todaySales':'مبيعات اليوم','dashboard.periodSales':'مبيعات الفترة',
    'dashboard.collected':'المحصل نقدًا','dashboard.receivables':'المستحق',
    'dashboard.cogs':'تكلفة البضاعة','dashboard.wages':'الأجور','dashboard.expenses':'المصاريف',
    'dashboard.netProfit':'صافي الربح','dashboard.openingCash':'الرصيد الافتتاحي',
    'dashboard.currentCash':'الخزنة الحالية','dashboard.bagsPurchased':'شكاير مشتراة',
    'dashboard.bagsProcessed':'دفعات','dashboard.availableQty':'كمية صالحة',
    'dashboard.soldQty':'كمية مباعة','dashboard.stockQty':'مخزون متبقٍ',
    'dashboard.stockValue':'قيمة المخزون','dashboard.unpaidWages':'أجور مستحقة',
    'dashboard.partnerShare':'نصيب الشريك','dashboard.drawings':'مسحوبات',
    'dashboard.recent':'آخر الحركات','dashboard.noData':'لا توجد معاملات بعد',
    'dashboard.noDataDesc':'ابدأ بإعداد الخزنة أو تسجيل شكارة','dashboard.period':'الفترة',
    'inventory.title':'الإنتاج والمخزون','inventory.addBatch':'دفعة جديدة','inventory.bags':'الشكاير',
    'inventory.supplier':'المورد','inventory.purchasePrice':'سعر الشراء',
    'inventory.rawWeight':'الوزن قبل','inventory.netWeight':'الوزن بعد','inventory.waste':'الفاقد',
    'inventory.available':'صالح للبيع','inventory.sold':'مباع','inventory.remaining':'متبقٍ',
    'inventory.processingCost':'تكلفة التجهيز','inventory.workers':'العمال',
    'inventory.unitCost':'تكلفة الوحدة','inventory.adjust':'تسوية','inventory.noBatches':'لا توجد دفعات',
    'sales.title':'المبيعات والفواتير','sales.newInvoice':'فاتورة جديدة','sales.invoiceNo':'رقم',
    'sales.customer':'العميل','sales.items':'البنود','sales.unit':'الوحدة','sales.unitPrice':'سعر الوحدة',
    'sales.lineTotal':'إجمالي البند','sales.discount':'خصم','sales.paid':'المدفوع',
    'sales.remaining':'المتبقي','sales.paymentMethod':'طريقة الدفع','sales.cash':'نقدي',
    'sales.credit':'آجل','sales.partial':'جزئي','sales.noInvoices':'لا توجد فواتير','sales.invoice':'فاتورة',
    'customers.title':'العملاء والديون','customers.new':'عميل جديد','customers.name':'الاسم',
    'customers.phone':'الهاتف','customers.address':'العنوان','customers.defaultPrice':'السعر الافتراضي',
    'customers.totalInvoices':'إجمالي الفواتير','customers.totalPaid':'إجمالي المدفوع',
    'customers.balance':'الرصيد','customers.statement':'كشف حساب','customers.collect':'تحصيل',
    'customers.noCustomers':'لا يوجد عملاء',
    'expenses.title':'المصروفات','expenses.new':'مصروف جديد','expenses.category':'التصنيف',
    'expenses.desc':'الوصف','expenses.receiver':'المستلم','expenses.noExpenses':'لا توجد مصروفات',
    'cashbox.title':'الخزنة','cashbox.opening':'الرصيد الافتتاحي','cashbox.current':'الرصيد الحالي',
    'cashbox.newMovement':'حركة جديدة','cashbox.in':'داخل','cashbox.out':'خارج',
    'cashbox.category':'التصنيف','cashbox.direction':'الاتجاه','cashbox.noMovements':'لا توجد حركات',
    'cashbox.reason':'السبب','cashbox.setOpening':'ضبط الافتتاحي',
    'workers.title':'العمال والأجور','workers.new':'عامل جديد','workers.name':'الاسم',
    'workers.rate':'أجر اليوم','workers.bagsWorked':'شكاير','workers.earned':'المستحق',
    'workers.paid':'المدفوع','workers.balance':'المتبقي','workers.pay':'دفع',
    'workers.active':'نشط','workers.inactive':'موقوف','workers.noWorkers':'لا يوجد عمال',
    'partners.title':'الشركاء والأرباح','partners.name':'الشريك','partners.share':'النسبة %',
    'partners.profitShare':'نصيب الربح','partners.drawings':'المسحوبات','partners.balance':'الرصيد',
    'partners.withdraw':'سحب','partners.periodProfit':'ربح الفترة','partners.availableCash':'نقدية متاحة',
    'partners.drawingsList':'سجل المسحوبات',
    'reports.title':'التقارير','reports.period':'الفترة','reports.from':'من','reports.to':'إلى',
    'reports.salesByCustomer':'مبيعات حسب العميل','reports.salesByProduct':'مبيعات حسب الدفعة',
    'reports.customerDebts':'ديون العملاء','reports.expensesByCat':'مصاريف حسب التصنيف',
    'reports.inventoryReport':'المخزون','reports.wagesReport':'أجور العمال',
    'reports.cashboxReport':'دفتر الخزنة','reports.profitReport':'صافي الربح',
    'reports.exportJson':'نسخة JSON','reports.noData':'لا توجد بيانات',
    'reports.comparison':'مقارنة بالفترة السابقة','reports.prev':'الفترة السابقة',
    'reports.current':'الفترة الحالية','reports.growth':'نسبة النمو',
    'settings.title':'الإعدادات','settings.general':'عام','settings.defaults':'القيم الافتراضية',
    'settings.buyPrice':'سعر شراء الشكارة','settings.sellPrice':'سعر البيع',
    'settings.workerWage':'أجر العامل','settings.opCost':'مصروف تقديري',
    'settings.partner1':'الشريك الأول','settings.partner2':'الشريك الثاني',
    'settings.share1':'نسبة الشريك 1 %','settings.share2':'نسبة الشريك 2 %',
    'settings.categories':'تصنيفات المصروفات (بفاصلة)','settings.backup':'النسخ الاحتياطي',
    'settings.exportBackup':'تصدير','settings.importBackup':'استيراد',
    'settings.reset':'إعادة ضبط','settings.resetWarn':'سيتم حذف كل البيانات! متأكد؟',
    'settings.saved':'تم الحفظ','settings.lang':'اللغة','settings.theme':'الوضع',
    'settings.accent':'لون التمييز','settings.monthlyGoal':'هدف الشهر (مبيعات)',
    'settings.pin':'رمز الحماية','settings.pinSet':'تعيين رمز PIN',
    'settings.pinRemove':'إزالة الرمز','settings.pinProtected':'محمي',
    'settings.lowStock':'حد المخزون المنخفض',
    'toast.saved':'تم الحفظ بنجاح','toast.deleted':'تم الحذف','toast.error':'حدث خطأ',
    'toast.invalid':'بيانات غير صحيحة','toast.insufficientStock':'الكمية غير كافية',
    'toast.insufficientCash':'الرصيد غير كافٍ','toast.confirmDelete':'تأكيد الحذف؟',
    'confirm.yes':'نعم','confirm.no':'إلغاء','confirm.import':'سيتم استبدال البيانات. متابعة؟',
    'confirm.reset':'حذف كل البيانات نهائيًا؟',
    'cmd.placeholder':'اكتب صفحة أو أمر...',
    'cmd.dashboard':'لوحة التحكم','cmd.newInvoice':'فاتورة جديدة','cmd.newBatch':'دفعة جديدة',
    'cmd.newCustomer':'عميل جديد','cmd.newExpense':'مصروف جديد','cmd.newWorker':'عامل جديد',
    'cmd.backup':'نسخة احتياطية','cmd.toggleTheme':'تبديل الوضع','cmd.toggleLang':'تبديل اللغة',
    'alerts.debtsOverdue':'ديون متأخرة','alerts.wagesDue':'أجور مستحقة','alerts.lowStock':'مخزون منخفض',
    'profit.title':'حاسبة الربح','profit.tab1':'ربح الشكارة','profit.tab2':'سعر البيع المقترح',
    'profit.buyPrice':'سعر شراء الشكارة','profit.bags':'عدد الشكاير','profit.sellPrice':'سعر البيع المتوقع',
    'profit.workersCost':'تكلفة العمال','profit.otherCost':'تكاليف أخرى','profit.expectedRevenue':'الإيراد المتوقع',
    'profit.totalCost':'إجمالي التكاليف','profit.expectedProfit':'الربح المتوقع',
    'profit.perBag':'ربح الشكارة','profit.margin':'هامش الربح','profit.costPerKg':'تكلفة الكيلو',
    'profit.weight':'الوزن (كجم)','profit.targetMargin':'نسبة الربح المطلوبة %',
    'profit.suggestedPrice':'سعر البيع المقترح','profit.calc':'احسب',
    'print.invoice':'طباعة الفاتورة','print.thanks':'شكرًا لتعاملكم معنا 🌶️',
    'print.tel':'هاتف','print.invoiceNo':'فاتورة رقم','print.dueDate':'تاريخ الاستحقاق',
    'invoice.repeat':'تكرار','invoice.print':'طباعة',
    'pin.enter':'أدخل الرمز PIN','pin.wrong':'رمز خاطئ','pin.set':'ادخل رمز 4-6 أرقام',
    'charts.salesTrend':'اتجاه المبيعات (آخر 30 يوم)','charts.profitTrend':'اتجاه الربح',
    'charts.salesVsExp':'مبيعات ومصاريف',
    'goal.progress':'التقدم نحو الهدف','goal.of':'من','goal.setHint':'اضبط الهدف من الإعدادات',
    'installments.dueDate':'تاريخ الاستحقاق','installments.overdue':'متأخر',
    'export.excel':'تصدير Excel','qr.title':'باركود الفاتورة',
    'action.invoice_created':'إنشاء فاتورة','action.invoice_cancelled':'إلغاء فاتورة',
    'action.invoice_edited':'تعديل فاتورة','action.batch_created':'إنشاء دفعة',
    'action.batch_edited':'تعديل دفعة','action.batch_deleted':'حذف دفعة',
    'action.expense_created':'إضافة مصروف','action.expense_edited':'تعديل مصروف',
    'action.expense_deleted':'حذف مصروف','action.payment':'تحصيل',
    'action.withdrawal':'سحب شريك','action.drawing_edited':'تعديل سحب',
    'action.drawing_deleted':'حذف سحب','action.adjust':'تسوية',
    'action.settings':'تعديل إعدادات','action.worker_payment':'دفع أجرة',
    'action.customer_edited':'تعديل عميل','action.customer_deleted':'حذف عميل',
    'action.worker_edited':'تعديل عامل','action.worker_deleted':'حذف عامل',
    'action.cash_edited':'تعديل حركة خزنة','action.cash_deleted':'حذف حركة خزنة',
    'msg.cannotEditSoldBatch':'لا يمكن تعديل دفعة تم بيع جزء منها',
    'msg.cannotDeleteSoldBatch':'لا يمكن حذف دفعة تم بيع جزء منها',
    'msg.customerHasInvoices':'لا يمكن حذف عميل له فواتير',
    'msg.workerHasWages':'لا يمكن حذف عامل له أجور مسجلة',
    'msg.cashAutoOnly':'هذه الحركة مرتبطة بسجل آخر. عدّل السجل الأصلي',
    'msg.editHintInvoice':'لتعديل البنود أو المبلغ المدفوع، ألغِ الفاتورة وأنشئ واحدة جديدة',
  },
  en: {
    'brand.tagline':'Manager',
    'nav.dashboard':'Dashboard','nav.inventory':'Production & Inventory','nav.sales':'Sales & Invoices',
    'nav.customers':'Customers & Debts','nav.expenses':'Expenses','nav.cashbox':'Cashbox',
    'nav.workers':'Workers & Wages','nav.partners':'Partners & Profit','nav.reports':'Reports',
    'nav.activity':'Activity Log','nav.settings':'Settings & Backup',
    'common.add':'Add','common.edit':'Edit','common.delete':'Delete','common.save':'Save',
    'common.cancel':'Cancel','common.search':'Search','common.close':'Close','common.export':'Export CSV',
    'common.date':'Date','common.notes':'Notes','common.amount':'Amount','common.qty':'Qty',
    'common.status':'Status','common.actions':'Actions','common.empty':'No data','common.total':'Total',
    'currency':'EGP',
    'dashboard.todaySales':"Today's Sales",'dashboard.periodSales':'Period Sales',
    'dashboard.collected':'Collected Cash','dashboard.receivables':'Receivables',
    'dashboard.cogs':'COGS','dashboard.wages':'Wages','dashboard.expenses':'Expenses',
    'dashboard.netProfit':'Net Profit','dashboard.openingCash':'Opening Cash',
    'dashboard.currentCash':'Current Cash','dashboard.bagsPurchased':'Bags Purchased',
    'dashboard.bagsProcessed':'Batches','dashboard.availableQty':'Available',
    'dashboard.soldQty':'Sold','dashboard.stockQty':'Stock','dashboard.stockValue':'Stock Value',
    'dashboard.unpaidWages':'Unpaid Wages','dashboard.partnerShare':'Partner Share',
    'dashboard.drawings':'Drawings','dashboard.recent':'Recent','dashboard.noData':'No transactions yet',
    'dashboard.noDataDesc':'Start by setting opening cash or adding a bag','dashboard.period':'Period',
    'inventory.title':'Production & Inventory','inventory.addBatch':'New Batch','inventory.bags':'Bags',
    'inventory.supplier':'Supplier','inventory.purchasePrice':'Purchase Price',
    'inventory.rawWeight':'Raw Weight','inventory.netWeight':'Net Weight','inventory.waste':'Waste',
    'inventory.available':'Available','inventory.sold':'Sold','inventory.remaining':'Remaining',
    'inventory.processingCost':'Processing Cost','inventory.workers':'Workers',
    'inventory.unitCost':'Unit Cost','inventory.adjust':'Adjust','inventory.noBatches':'No batches',
    'sales.title':'Sales & Invoices','sales.newInvoice':'New Invoice','sales.invoiceNo':'No.',
    'sales.customer':'Customer','sales.items':'Items','sales.unit':'Unit','sales.unitPrice':'Unit Price',
    'sales.lineTotal':'Line Total','sales.discount':'Discount','sales.paid':'Paid',
    'sales.remaining':'Remaining','sales.paymentMethod':'Method','sales.cash':'Cash',
    'sales.credit':'Credit','sales.partial':'Partial','sales.noInvoices':'No invoices','sales.invoice':'Invoice',
    'customers.title':'Customers & Debts','customers.new':'New Customer','customers.name':'Name',
    'customers.phone':'Phone','customers.address':'Address','customers.defaultPrice':'Default Price',
    'customers.totalInvoices':'Total Invoices','customers.totalPaid':'Total Paid',
    'customers.balance':'Balance','customers.statement':'Statement','customers.collect':'Collect',
    'customers.noCustomers':'No customers',
    'expenses.title':'Expenses','expenses.new':'New Expense','expenses.category':'Category',
    'expenses.desc':'Description','expenses.receiver':'Receiver','expenses.noExpenses':'No expenses',
    'cashbox.title':'Cashbox','cashbox.opening':'Opening Balance','cashbox.current':'Current Balance',
    'cashbox.newMovement':'New Movement','cashbox.in':'In','cashbox.out':'Out',
    'cashbox.category':'Category','cashbox.direction':'Direction','cashbox.noMovements':'No movements',
    'cashbox.reason':'Reason','cashbox.setOpening':'Set Opening',
    'workers.title':'Workers & Wages','workers.new':'New Worker','workers.name':'Name',
    'workers.rate':'Rate/Bag','workers.bagsWorked':'Bags','workers.earned':'Earned',
    'workers.paid':'Paid','workers.balance':'Balance','workers.pay':'Pay',
    'workers.active':'Active','workers.inactive':'Inactive','workers.noWorkers':'No workers',
    'partners.title':'Partners & Profit','partners.name':'Partner','partners.share':'Share %',
    'partners.profitShare':'Profit Share','partners.drawings':'Drawings','partners.balance':'Balance',
    'partners.withdraw':'Withdraw','partners.periodProfit':'Period Profit','partners.availableCash':'Available Cash',
    'partners.drawingsList':'Drawings History',
    'reports.title':'Reports','reports.period':'Period','reports.from':'From','reports.to':'To',
    'reports.salesByCustomer':'Sales by Customer','reports.salesByProduct':'Sales by Batch',
    'reports.customerDebts':'Customer Debts','reports.expensesByCat':'Expenses by Category',
    'reports.inventoryReport':'Inventory','reports.wagesReport':'Worker Wages',
    'reports.cashboxReport':'Cashbox Ledger','reports.profitReport':'Net Profit',
    'reports.exportJson':'JSON Backup','reports.noData':'No data',
    'reports.comparison':'Period Comparison','reports.prev':'Previous Period',
    'reports.current':'Current Period','reports.growth':'Growth %',
    'settings.title':'Settings','settings.general':'General','settings.defaults':'Defaults',
    'settings.buyPrice':'Bag Purchase Price','settings.sellPrice':'Selling Price',
    'settings.workerWage':'Worker Wage','settings.opCost':'Estimated Op. Cost',
    'settings.partner1':'Partner 1','settings.partner2':'Partner 2',
    'settings.share1':'Partner 1 Share %','settings.share2':'Partner 2 Share %',
    'settings.categories':'Expense Categories (comma)','settings.backup':'Backup',
    'settings.exportBackup':'Export','settings.importBackup':'Import',
    'settings.reset':'Reset','settings.resetWarn':'All data will be deleted! Sure?',
    'settings.saved':'Saved','settings.lang':'Language','settings.theme':'Theme',
    'settings.accent':'Accent Color','settings.monthlyGoal':'Monthly Goal (sales)',
    'settings.pin':'PIN Code','settings.pinSet':'Set PIN',
    'settings.pinRemove':'Remove PIN','settings.pinProtected':'Protected',
    'settings.lowStock':'Low Stock Threshold',
    'toast.saved':'Saved','toast.deleted':'Deleted','toast.error':'Error',
    'toast.invalid':'Invalid data','toast.insufficientStock':'Insufficient stock',
    'toast.insufficientCash':'Insufficient cash','toast.confirmDelete':'Confirm delete?',
    'confirm.yes':'Yes','confirm.no':'Cancel','confirm.import':'Data will be replaced. Continue?',
    'confirm.reset':'Delete all data permanently?',
    'cmd.placeholder':'Type a page or command...',
    'cmd.dashboard':'Dashboard','cmd.newInvoice':'New Invoice','cmd.newBatch':'New Batch',
    'cmd.newCustomer':'New Customer','cmd.newExpense':'New Expense','cmd.newWorker':'New Worker',
    'cmd.backup':'Backup','cmd.toggleTheme':'Toggle Theme','cmd.toggleLang':'Toggle Language',
    'alerts.debtsOverdue':'Overdue Debts','alerts.wagesDue':'Wages Due','alerts.lowStock':'Low Stock',
    'profit.title':'Profit Calculator','profit.tab1':'Bag Profit','profit.tab2':'Suggested Price',
    'profit.buyPrice':'Purchase Price','profit.bags':'Bags','profit.sellPrice':'Expected Sell Price',
    'profit.workersCost':'Workers Cost','profit.otherCost':'Other Costs','profit.expectedRevenue':'Expected Revenue',
    'profit.totalCost':'Total Cost','profit.expectedProfit':'Expected Profit',
    'profit.perBag':'Profit / Bag','profit.margin':'Margin','profit.costPerKg':'Cost / Kg',
    'profit.weight':'Weight (kg)','profit.targetMargin':'Target Margin %',
    'profit.suggestedPrice':'Suggested Price','profit.calc':'Calculate',
    'print.invoice':'Print Invoice','print.thanks':'Thank you for your business 🌶️',
    'print.tel':'Tel','print.invoiceNo':'Invoice No.','print.dueDate':'Due Date',
    'invoice.repeat':'Repeat','invoice.print':'Print',
    'pin.enter':'Enter PIN','pin.wrong':'Wrong PIN','pin.set':'Enter 4-6 digits',
    'charts.salesTrend':'Sales Trend (last 30 days)','charts.profitTrend':'Profit Trend',
    'charts.salesVsExp':'Sales vs Expenses',
    'goal.progress':'Goal Progress','goal.of':'of','goal.setHint':'Set goal in settings',
    'installments.dueDate':'Due Date','installments.overdue':'Overdue',
    'export.excel':'Export Excel','qr.title':'Invoice QR',
    'action.invoice_created':'Invoice Created','action.invoice_cancelled':'Invoice Cancelled',
    'action.invoice_edited':'Invoice Edited','action.batch_created':'Batch Created',
    'action.batch_edited':'Batch Edited','action.batch_deleted':'Batch Deleted',
    'action.expense_created':'Expense Added','action.expense_edited':'Expense Edited',
    'action.expense_deleted':'Expense Deleted','action.payment':'Collection',
    'action.withdrawal':'Partner Withdrawal','action.drawing_edited':'Drawing Edited',
    'action.drawing_deleted':'Drawing Deleted','action.adjust':'Adjustment',
    'action.settings':'Settings Changed','action.worker_payment':'Worker Payment',
    'action.customer_edited':'Customer Edited','action.customer_deleted':'Customer Deleted',
    'action.worker_edited':'Worker Edited','action.worker_deleted':'Worker Deleted',
    'action.cash_edited':'Cash Movement Edited','action.cash_deleted':'Cash Movement Deleted',
    'msg.cannotEditSoldBatch':'Cannot edit a batch with sold items',
    'msg.cannotDeleteSoldBatch':'Cannot delete a batch with sold items',
    'msg.customerHasInvoices':'Cannot delete a customer with invoices',
    'msg.workerHasWages':'Cannot delete a worker with recorded wages',
    'msg.cashAutoOnly':'This movement is linked to another record. Edit the source',
    'msg.editHintInvoice':'To change items or paid amount, cancel and recreate',
  }
};

let LANG = localStorage.getItem('ff_lang') || 'ar';
let THEME = localStorage.getItem('ff_theme') || 'dark';
let ACCENT = localStorage.getItem('ff_accent') || '#0FB864';
let SOUND_ON = localStorage.getItem('ff_sound') !== 'off';

const t = (k) => (I18N[LANG] && I18N[LANG][k]) || k;

function applyLang() {
  document.documentElement.lang = LANG;
  document.documentElement.dir = LANG === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  const lb = document.getElementById('langBtn');
  if (lb) lb.textContent = LANG === 'ar' ? 'EN' : 'AR';
  const ci = document.getElementById('cmdInput');
  if (ci) ci.placeholder = t('cmd.placeholder');
}
function applyTheme() {
  document.documentElement.setAttribute('data-theme', THEME);
  const tb = document.getElementById('themeBtn');
  if (tb) tb.textContent = THEME === 'dark' ? '☀' : '☾';
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME === 'dark' ? '#050505' : '#fafcfb');
}
function applyAccent(color) {
  ACCENT = color;
  document.documentElement.style.setProperty('--accent', color);
  document.documentElement.style.setProperty('--accent-glow', color + '8C');
  localStorage.setItem('ff_accent', color);
}

/* ========== Sound ========== */
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
function playSound(type) {
  if (!SOUND_ON) return;
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const ctx = audioCtx;
    const now = ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.connect(g); g.connect(ctx.destination);
    if (type === 'click') { o.frequency.value = 800; g.gain.value = 0.03; o.type = 'sine'; }
    else if (type === 'success') {
      o.frequency.value = 660; o.type = 'triangle'; g.gain.value = 0.04;
      o.frequency.setValueAtTime(660, now);
      o.frequency.exponentialRampToValueAtTime(990, now + 0.15);
    } else if (type === 'error') { o.frequency.value = 220; o.type = 'sawtooth'; g.gain.value = 0.04; }
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);
    o.start(now); o.stop(now + 0.3);
  } catch(e) {}
}
const Sound = { click: () => playSound('click'), success: () => playSound('success'), error: () => playSound('error') };

/* ========== Confetti ========== */
let confettiParticles = [];
let confettiRAF = null;
function fireConfetti() {
  const canvas = document.getElementById('confetti');
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.classList.add('active');
  const colors = ['#0FB864','#16DD79','#0A9A52','#34E68C','#046A38','#16DD79'];
  confettiParticles = [];
  for (let i = 0; i < 100; i++) {
    confettiParticles.push({
      x: Math.random() * canvas.width,
      y: -10 - Math.random() * 40,
      vx: (Math.random() - 0.5) * 6,
      vy: 2 + Math.random() * 4,
      size: 5 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      vr: (Math.random() - 0.5) * 12,
    });
  }
  if (confettiRAF) cancelAnimationFrame(confettiRAF);
  let frames = 0;
  const ctx = canvas.getContext('2d');
  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confettiParticles.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.vy += 0.12; p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    confettiParticles = confettiParticles.filter(p => p.y < canvas.height + 20);
    frames++;
    if (confettiParticles.length > 0 && frames < 180) confettiRAF = requestAnimationFrame(loop);
    else { canvas.classList.remove('active'); ctx.clearRect(0, 0, canvas.width, canvas.height); }
  }
  loop();
}

/* ========== Storage ========== */
const STORAGE_KEY = 'fel_fel_manager_v1';
const SCHEMA_VERSION = 2;

function defaultSettings() {
  return {
    buyPrice: 200, sellPrice: 400, workerWage: 25, opCost: 50,
    partner1: 'الشريك الأول', partner2: 'الشريك الثاني',
    share1: 50, share2: 50,
    expenseCategories: ['شراء الفلفل','أكياس وتغليف','نقل','أجور عمال','مصاريف أخرى'],
    currency: 'EGP', openingCash: 0, openingCashSet: false,
    monthlyGoal: 0, pin: '', lowStockThreshold: 5, sellerPhone: '',
  };
}
function defaultState() {
  return {
    version: SCHEMA_VERSION, settings: defaultSettings(),
    customers: [], batches: [], invoices: [], payments: [], expenses: [],
    workers: [], wageEntries: [], wagePayments: [], cashMovements: [],
    drawings: [], auditLog: []
  };
}

let state = loadState();
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultState();
    const p = JSON.parse(raw);
    return { ...defaultState(), ...p, version: SCHEMA_VERSION };
  } catch(e) { return defaultState(); }
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch(e) { toast(t('toast.error'), 'error'); }
}

/* ========== Utils ========== */
const uid = (p='id') => p + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
const num = v => { const n = Number(v); return isFinite(n) ? n : 0; };
const fmt = n => num(n).toLocaleString(LANG === 'ar' ? 'ar-EG' : 'en-US', { maximumFractionDigits: 2 }) + ' ' + t('currency');
const fmtNum = n => num(n).toLocaleString(LANG === 'ar' ? 'ar-EG' : 'en-US', { maximumFractionDigits: 2 });
const todayISO = () => new Date().toISOString().slice(0, 10);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const withinRange = (d, f, to) => (!f && !to) || (d >= (f||'') && d <= (to||'9999-12-31'));

function toast(msg, type='success') {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.className = 'toast show ' + type;
  clearTimeout(el._to);
  el._to = setTimeout(() => { el.className = 'toast'; }, 2800);
  if (type === 'success') Sound.success(); else if (type === 'error') Sound.error();
}

/* ========== Modal ========== */
function openModal(title, bodyHTML, footerHTML) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHTML;
  document.getElementById('modalFooter').innerHTML = footerHTML || '';
  document.getElementById('modal').classList.remove('hidden');
  document.body.classList.add('modal-open');
}
function closeModal() {
  document.getElementById('modal').classList.add('hidden');
  document.body.classList.remove('modal-open');
}
function confirmDialog(title, msg, onYes) {
  openModal(title, `<p>${esc(msg)}</p>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('confirm.no')}</button>
     <button class="btn btn-danger" id="__confirmYes">${t('confirm.yes')}</button>`);
  document.getElementById('__confirmYes').onclick = () => { closeModal(); onYes(); };
}

/* ========== Calculations ========== */
const Calc = {
  batchUnitCost(b) {
    const total = num(b.purchasePrice) + num(b.processingCost) + num(b.wagesCost);
    const q = num(b.availableQty);
    return q > 0 ? total / q : 0;
  },
  kiloCost(b) {
    const total = num(b.purchasePrice) + num(b.processingCost) + num(b.wagesCost);
    return num(b.netWeight) > 0 ? total / num(b.netWeight) : 0;
  },
  cogsRange(from, to) {
    let s = 0;
    state.invoices.filter(i => i.status !== 'cancelled' && withinRange(i.date, from, to)).forEach(inv => {
      inv.items.forEach(it => {
        const b = state.batches.find(x => x.id === it.batchId);
        if (b) s += num(it.qty) * num(b.unitCost);
      });
    });
    return s;
  },
  cogs() { return this.cogsRange('', ''); },
  totalSales(from='', to='') {
    return state.invoices.filter(i => i.status !== 'cancelled' && withinRange(i.date, from, to))
      .reduce((s, i) => s + num(i.total), 0);
  },
  collectedCash(from='', to='') {
    let s = 0;
    state.invoices.filter(i => i.status !== 'cancelled' && withinRange(i.date, from, to)).forEach(i => s += num(i.paid));
    state.payments.filter(p => withinRange(p.date, from, to)).forEach(p => s += num(p.amount));
    return s;
  },
  receivables() {
    return state.invoices.filter(i => i.status !== 'cancelled').reduce((s, i) => s + Math.max(0, num(i.total) - num(i.paid)), 0);
  },
  operatingExpenses(from='', to='') {
    const invCat = state.settings.expenseCategories[0] || '';
    return state.expenses.filter(e => withinRange(e.date, from, to))
      .filter(e => e.category !== invCat && e.category !== 'أجور عمال')
      .reduce((s, e) => s + num(e.amount), 0);
  },
  totalWages(from='', to='') {
    return state.wageEntries.filter(w => withinRange(w.date, from, to)).reduce((s, w) => s + num(w.amount), 0);
  },
  netProfit(from='', to='') {
    return this.totalSales(from, to) - this.cogsRange(from, to) - this.operatingExpenses(from, to);
  },
  cashBalance() {
    let b = num(state.settings.openingCash);
    state.cashMovements.forEach(m => b += (m.direction === 'in' ? 1 : -1) * num(m.amount));
    return b;
  },
  partnerDrawings(id) { return state.drawings.filter(d => d.partnerId === id).reduce((s, d) => s + num(d.amount), 0); },
  workerEarned(id) { return state.wageEntries.filter(w => w.workerId === id).reduce((s, w) => s + num(w.amount), 0); },
  workerPaid(id) { return state.wagePayments.filter(p => p.workerId === id).reduce((s, p) => s + num(p.amount), 0); },
  customerBalance(id) {
    const inv = state.invoices.filter(i => i.customerId === id && i.status !== 'cancelled')
      .reduce((s, i) => s + Math.max(0, num(i.total) - num(i.paid)), 0);
    const pay = state.payments.filter(p => p.customerId === id).reduce((s, p) => s + num(p.amount), 0);
    return inv - pay;
  },
  stockQty() { return state.batches.reduce((s, b) => s + Math.max(0, num(b.availableQty) - num(b.soldQty)), 0); },
  stockValue() { return state.batches.reduce((s, b) => s + Math.max(0, num(b.availableQty) - num(b.soldQty)) * num(b.unitCost), 0); },
};

/* ========== Navigation ========== */
let currentPage = 'dashboard';
const PAGES = {
  dashboard: renderDashboard, inventory: renderInventory, sales: renderSales,
  customers: renderCustomers, expenses: renderExpenses, cashbox: renderCashbox,
  workers: renderWorkers, partners: renderPartners, reports: renderReports,
  activity: renderActivity, settings: renderSettings,
};
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.page === page));
  document.getElementById('pageTitle').textContent = t('nav.' + page) || page;
  document.getElementById('sidebar').classList.remove('open');
  const content = document.getElementById('content');
  content.style.opacity = '0';
  PAGES[page]();
  requestAnimationFrame(() => {
    content.style.opacity = '1';
    content.scrollTop = 0;
  });
  staggerStats();
  updateCashPill();
  renderAlertsBar();
}
function staggerStats() {
  document.querySelectorAll('.stat-card').forEach((c, i) => {
    c.style.animation = `fadeUp 0.4s var(--ease) ${i * 0.03}s both`;
  });
}
function updateCashPill() {
  const el = document.getElementById('cashPillText');
  if (el) el.textContent = t('cashbox.current') + ': ' + fmt(Calc.cashBalance());
}

/* ========== Alerts ========== */
function peekAlerts() {
  const alerts = [];
  const overdue = state.customers.filter(c => {
    const bal = Calc.customerBalance(c.id);
    if (bal <= 0) return false;
    const oldInv = state.invoices.filter(i => i.customerId === c.id && i.status !== 'cancelled' && num(i.total) - num(i.paid) > 0);
    if (!oldInv.length) return false;
    const oldest = oldInv.reduce((a, b) => (a.date < b.date ? a : b));
    const days = Math.floor((Date.now() - new Date(oldest.date).getTime()) / 86400000);
    return days > 30;
  });
  if (overdue.length) alerts.push({ type: 'danger', txt: t('alerts.debtsOverdue') + ': ' + overdue.length, page: 'customers' });
  const wagesDue = state.workers.reduce((s, w) => s + Math.max(0, Calc.workerEarned(w.id) - Calc.workerPaid(w.id)), 0);
  if (wagesDue > 0) alerts.push({ type: 'warn', txt: t('alerts.wagesDue') + ': ' + fmt(wagesDue), page: 'workers' });
  if (Calc.stockQty() < num(state.settings.lowStockThreshold))
    alerts.push({ type: 'info', txt: t('alerts.lowStock') + ': ' + fmtNum(Calc.stockQty()), page: 'inventory' });
  return alerts;
}
function renderAlertsBar() {
  const bar = document.getElementById('alertsBar');
  if (!bar) return;
  const alerts = peekAlerts();
  if (!alerts.length) { bar.classList.remove('has-alerts'); bar.innerHTML = ''; return; }
  bar.classList.add('has-alerts');
  bar.innerHTML = alerts.map((a, i) =>
    `<div class="alert-pill ${a.type}" style="animation-delay:${i*0.05}s" onclick="navigate('${a.page}')">
      <span class="dot"></span><span>${esc(a.txt)}</span>
    </div>`
  ).join('');
}

/* ========== Dashboard ========== */
function renderDashboard() {
  const today = todayISO();
  const todaySales = state.invoices.filter(i => i.status !== 'cancelled' && i.date === today).reduce((s, i) => s + num(i.total), 0);
  const periodSales = Calc.totalSales();
  const collected = Calc.collectedCash();
  const receivables = Calc.receivables();
  const cogs = Calc.cogs();
  const wages = Calc.totalWages();
  const op = Calc.operatingExpenses();
  const profit = Calc.netProfit();
  const opening = num(state.settings.openingCash);
  const current = Calc.cashBalance();
  const bagsP = state.batches.reduce((s, b) => s + num(b.bags), 0);
  const bagsProc = state.batches.length;
  const availQty = state.batches.reduce((s, b) => s + num(b.availableQty), 0);
  const soldQty = state.batches.reduce((s, b) => s + num(b.soldQty), 0);
  const stockQty = Calc.stockQty();
  const stockVal = Calc.stockValue();
  const unpaidWages = state.workers.reduce((s, w) => s + Math.max(0, Calc.workerEarned(w.id) - Calc.workerPaid(w.id)), 0);
  const p1 = profit * num(state.settings.share1) / 100;
  const p2 = profit * num(state.settings.share2) / 100;
  const hasData = state.invoices.length || state.batches.length || state.expenses.length;

  if (!hasData) {
    document.getElementById('content').innerHTML = `
      <div class="panel empty">
        <h4>${t('dashboard.noData')}</h4>
        <p>${t('dashboard.noDataDesc')}</p>
        <div class="row" style="justify-content:center">
          <button class="btn btn-primary" onclick="openOpeningCashModal()">${t('cashbox.setOpening')}</button>
          <button class="btn btn-secondary" onclick="navigate('inventory')">${t('inventory.addBatch')}</button>
        </div>
      </div>`;
    return;
  }

  const cards = [
    ['dashboard.todaySales', fmt(todaySales), ''],
    ['dashboard.periodSales', fmt(periodSales), ''],
    ['dashboard.collected', fmt(collected), 'pos'],
    ['dashboard.receivables', fmt(receivables), receivables > 0 ? 'warn' : ''],
    ['dashboard.cogs', fmt(cogs), ''],
    ['dashboard.wages', fmt(wages), ''],
    ['dashboard.expenses', fmt(op), ''],
    ['dashboard.netProfit', fmt(profit), profit >= 0 ? 'pos' : 'neg'],
    ['dashboard.openingCash', fmt(opening), ''],
    ['dashboard.currentCash', fmt(current), 'pos'],
    ['dashboard.bagsPurchased', fmtNum(bagsP), ''],
    ['dashboard.bagsProcessed', fmtNum(bagsProc), ''],
    ['dashboard.availableQty', fmtNum(availQty), ''],
    ['dashboard.soldQty', fmtNum(soldQty), ''],
    ['dashboard.stockQty', fmtNum(stockQty), ''],
    ['dashboard.stockValue', fmt(stockVal), ''],
    ['dashboard.unpaidWages', fmt(unpaidWages), unpaidWages > 0 ? 'warn' : ''],
  ];

  const recent = [
    ...state.invoices.map(i => ({ d: i.date, txt: `${t('sales.invoice')} #${i.no}`, amt: i.total, dir: 'in' })),
    ...state.expenses.map(e => ({ d: e.date, txt: e.category, amt: e.amount, dir: 'out' })),
    ...state.cashMovements.map(m => ({ d: m.date, txt: m.category, amt: m.amount, dir: m.direction })),
  ].sort((a, b) => (b.d || '').localeCompare(a.d || '')).slice(0, 8);

  const goalHTML = (() => {
    const gp = getMonthProgress();
    if (!gp) return '';
    return `<div class="panel">
      <div class="panel-head"><h3>${t('goal.progress')}</h3></div>
      <div class="goal-bar"><div class="goal-fill" style="width:${gp.pct}%"></div></div>
      <div class="goal-info">
        <span>${fmt(gp.monthSales)} ${t('goal.of')} ${fmt(gp.goal)}</span>
        <span>${fmtNum(gp.pct)}%</span>
      </div>
    </div>`;
  })();

  document.getElementById('content').innerHTML = `
    <div class="stats-grid">
      ${cards.map(c => `<div class="stat-card"><div class="label">${t(c[0])}</div><div class="value ${c[2]}">${c[1]}</div></div>`).join('')}
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${t('dashboard.partnerShare')}</h3></div>
      <div class="stats-grid">
        <div class="stat-card"><div class="label">${esc(state.settings.partner1)} (${state.settings.share1}%)</div><div class="value pos">${fmt(p1)}</div></div>
        <div class="stat-card"><div class="label">${esc(state.settings.partner2)} (${state.settings.share2}%)</div><div class="value pos">${fmt(p2)}</div></div>
        <div class="stat-card"><div class="label">${t('dashboard.drawings')}</div><div class="value">${fmt(Calc.partnerDrawings('p1') + Calc.partnerDrawings('p2'))}</div></div>
      </div>
    </div>
    ${goalHTML}
    <div class="panel">
      <div class="panel-head"><h3>${t('charts.salesTrend')}</h3></div>
      <div class="chart-box"><canvas id="chartSales"></canvas></div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${t('charts.profitTrend')}</h3></div>
      <div class="chart-box"><canvas id="chartProfit"></canvas></div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${t('dashboard.recent')}</h3></div>
      ${recent.length === 0 ? `<p class="text-muted">${t('common.empty')}</p>` :
        `<div class="table-wrap"><table><thead><tr><th>${t('common.date')}</th><th>${t('common.notes')}</th><th>${t('common.amount')}</th></tr></thead><tbody>
        ${recent.map(r => `<tr><td>${esc(r.d)}</td><td>${esc(r.txt)}</td><td class="${r.dir === 'in' ? 'text-success' : 'text-danger'}">${r.dir === 'in' ? '+' : '-'}${fmt(r.amt)}</td></tr>`).join('')}
        </tbody></table></div>`}
    </div>`;

  requestAnimationFrame(() => renderDashboardCharts());
}

function getMonthProgress() {
  const goal = num(state.settings.monthlyGoal);
  if (goal <= 0) return null;
  const now = new Date();
  const ms = new Date(now.getFullYear(), now.getMonth(), 1).toISOString().slice(0, 10);
  const me = new Date(now.getFullYear(), now.getMonth() + 1, 0).toISOString().slice(0, 10);
  const sales = state.invoices.filter(i => i.status !== 'cancelled' && i.date >= ms && i.date <= me)
    .reduce((s, i) => s + num(i.total), 0);
  return { goal, monthSales: sales, pct: Math.min(100, (sales / goal) * 100) };
}

/* ========== Inventory ========== */
function renderInventory() {
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h3>${t('inventory.title')}</h3>
        <button class="btn btn-primary" onclick="openBatchModal()">+ ${t('inventory.addBatch')}</button>
      </div>
      ${state.batches.length === 0 ? `<div class="empty"><h4>${t('inventory.noBatches')}</h4></div>` :
      `<div class="table-wrap"><table><thead><tr>
        <th>${t('common.date')}</th><th>${t('inventory.bags')}</th><th>${t('inventory.supplier')}</th>
        <th>${t('inventory.purchasePrice')}</th><th>${t('inventory.netWeight')}</th><th>${t('inventory.waste')}</th>
        <th>${t('inventory.available')}</th><th>${t('inventory.sold')}</th><th>${t('inventory.remaining')}</th>
        <th>${t('inventory.unitCost')}</th><th>${t('profit.costPerKg')}</th><th>${t('common.actions')}</th>
      </tr></thead><tbody>
        ${state.batches.map(b => {
          const rem = Math.max(0, num(b.availableQty) - num(b.soldQty));
          const hasSold = num(b.soldQty) > 0;
          return `<tr>
            <td>${esc(b.date)}</td><td>${fmtNum(b.bags)}</td><td>${esc(b.supplier || '-')}</td>
            <td>${fmt(b.purchasePrice)}</td><td>${fmtNum(b.netWeight)}</td><td>${fmtNum(b.waste)}</td>
            <td>${fmtNum(b.availableQty)}</td><td>${fmtNum(b.soldQty)}</td><td><b>${fmtNum(rem)}</b></td>
            <td>${fmt(b.unitCost)}</td><td>${fmt(Calc.kiloCost(b))}</td>
            <td>
              ${!hasSold ? `<button class="btn btn-sm btn-secondary" onclick="openBatchModal('${b.id}')" title="${t('common.edit')}">✏️</button> ` : ''}
              <button class="btn btn-sm btn-secondary" onclick="openAdjustBatch('${b.id}')">${t('inventory.adjust')}</button>
              ${!hasSold ? ` <button class="btn btn-sm btn-danger" onclick="deleteBatch('${b.id}')" title="${t('common.delete')}">🗑️</button>` : ''}
            </td>
          </tr>`;
        }).join('')}
      </tbody></table></div>`}
    </div>`;
}
function openBatchModal(id) {
  const existing = id ? state.batches.find(b => b.id === id) : null;
  const workers = state.workers.filter(w => w.active);
  const selectedIds = existing ? (existing.workerIds || []) : [];
  openModal((existing ? t('common.edit') : t('inventory.addBatch')),
    `<input type="hidden" id="b_id" value="${existing ? existing.id : ''}">
    <div class="form-grid">
      <div class="form-group"><label>${t('common.date')}</label><input type="date" id="b_date" value="${existing ? existing.date : todayISO()}"></div>
      <div class="form-group"><label>${t('inventory.bags')}</label><input type="number" id="b_bags" value="${existing ? existing.bags : 1}" min="1"></div>
      <div class="form-group"><label>${t('inventory.supplier')}</label><input id="b_supplier" value="${existing ? esc(existing.supplier || '') : ''}"></div>
      <div class="form-group"><label>${t('inventory.purchasePrice')}</label><input type="number" id="b_purchasePrice" value="${existing ? existing.purchasePrice : state.settings.buyPrice}"></div>
      <div class="form-group"><label>${t('inventory.rawWeight')}</label><input type="number" id="b_rawWeight" value="${existing ? existing.rawWeight : 0}" step="0.01"></div>
      <div class="form-group"><label>${t('inventory.netWeight')}</label><input type="number" id="b_netWeight" value="${existing ? existing.netWeight : 0}" step="0.01"></div>
      <div class="form-group"><label>${t('inventory.processingCost')}</label><input type="number" id="b_procCost" value="${existing ? existing.processingCost : 0}"></div>
      <div class="form-group"><label>${t('inventory.workers')}</label>
        <select id="b_workers" multiple size="3">${workers.map(w => `<option value="${w.id}" ${selectedIds.includes(w.id) ? 'selected' : ''}>${esc(w.name)}</option>`).join('')}</select>
      </div>
      <div class="form-group full"><label>${t('common.notes')}</label><textarea id="b_notes">${existing ? esc(existing.notes || '') : ''}</textarea></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveBatch()">${t('common.save')}</button>`);
}
function saveBatch() {
  const id = document.getElementById('b_id').value;
  const existing = id ? state.batches.find(b => b.id === id) : null;
  if (existing && num(existing.soldQty) > 0) { toast(t('msg.cannotEditSoldBatch'), 'error'); return; }
  const date = document.getElementById('b_date').value;
  const bags = num(document.getElementById('b_bags').value);
  const purchasePrice = num(document.getElementById('b_purchasePrice').value);
  const rawWeight = num(document.getElementById('b_rawWeight').value);
  const netWeight = num(document.getElementById('b_netWeight').value);
  const procCost = num(document.getElementById('b_procCost').value);
  const supplier = document.getElementById('b_supplier').value.trim();
  const notes = document.getElementById('b_notes').value.trim();
  if (!date || bags <= 0) { toast(t('toast.invalid'), 'error'); return; }
  const selected = Array.from(document.getElementById('b_workers').selectedOptions).map(o => o.value);
  let wagesCost = 0;
  const wageEntries = [];
  selected.forEach(wid => {
    const w = state.workers.find(x => x.id === wid);
    if (w) { const a = bags * num(w.rate); wagesCost += a; wageEntries.push({ id: uid('wage'), workerId: wid, bags, rate: num(w.rate), amount: a, date }); }
  });
  if (existing) {
    state.cashMovements = state.cashMovements.filter(m => m.refId !== existing.id);
    state.wageEntries = state.wageEntries.filter(w => w.batchId !== existing.id);
    Object.assign(existing, {
      date, bags, supplier, purchasePrice, rawWeight, netWeight,
      waste: Math.max(0, rawWeight - netWeight),
      availableQty: netWeight || rawWeight,
      processingCost: procCost, wagesCost,
      workerIds: selected, notes
    });
    existing.unitCost = Calc.batchUnitCost(existing);
    wageEntries.forEach(w => { w.batchId = existing.id; state.wageEntries.push(w); });
    addCashMovement({ date, type: 'inventory_purchase', category: t('inventory.bags'), direction: 'out', amount: purchasePrice * bags, method: 'cash', refId: existing.id, notes: supplier });
    if (procCost > 0) addCashMovement({ date, type: 'processing', category: t('inventory.processingCost'), direction: 'out', amount: procCost, method: 'cash', refId: existing.id });
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'batch_edited', details: existing.id });
  } else {
    const batch = {
      id: uid('batch'), date, bags, supplier, purchasePrice, rawWeight, netWeight,
      waste: Math.max(0, rawWeight - netWeight),
      availableQty: netWeight || rawWeight, soldQty: 0,
      processingCost: procCost, wagesCost, unitCost: 0,
      workerIds: selected, notes,
    };
    batch.unitCost = Calc.batchUnitCost(batch);
    state.batches.push(batch);
    wageEntries.forEach(w => { w.batchId = batch.id; state.wageEntries.push(w); });
    addCashMovement({ date, type: 'inventory_purchase', category: t('inventory.bags'), direction: 'out', amount: purchasePrice * bags, method: 'cash', refId: batch.id, notes: supplier });
    if (procCost > 0) addCashMovement({ date, type: 'processing', category: t('inventory.processingCost'), direction: 'out', amount: procCost, method: 'cash', refId: batch.id });
    state.auditLog.push({ id: uid('log'), date, action: 'batch_created', details: `#${bags} bag(s)` });
  }
  saveState(); closeModal(); toast(t('toast.saved'));
  fireConfetti(); renderInventory(); updateCashPill();
}
function deleteBatch(id) {
  const b = state.batches.find(x => x.id === id);
  if (!b) return;
  if (num(b.soldQty) > 0) { toast(t('msg.cannotDeleteSoldBatch'), 'error'); return; }
  confirmDialog(t('toast.confirmDelete'), `${b.date} — ${fmtNum(b.bags)} ${t('inventory.bags')}`, () => {
    state.cashMovements = state.cashMovements.filter(m => m.refId !== id);
    state.wageEntries = state.wageEntries.filter(w => w.batchId !== id);
    state.batches = state.batches.filter(x => x.id !== id);
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'batch_deleted', details: id });
    saveState(); toast(t('toast.deleted')); renderInventory(); updateCashPill();
  });
}
function openAdjustBatch(id) {
  const b = state.batches.find(x => x.id === id);
  openModal(t('inventory.adjust'), `
    <div class="form-grid">
      <div class="form-group"><label>${t('inventory.available')}</label><input type="number" id="adj_avail" value="${b.availableQty}" step="0.01"></div>
      <div class="form-group full"><label>${t('cashbox.reason')}</label><input id="adj_reason" placeholder="تالف / فرق جرد"></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveAdjustBatch('${id}')">${t('common.save')}</button>`);
}
function saveAdjustBatch(id) {
  const b = state.batches.find(x => x.id === id);
  const av = num(document.getElementById('adj_avail').value);
  const reason = document.getElementById('adj_reason').value;
  if (av < num(b.soldQty)) { toast(t('toast.invalid'), 'error'); return; }
  b.availableQty = av; b.unitCost = Calc.batchUnitCost(b);
  state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'adjust', details: `${id}: ${reason}` });
  saveState(); closeModal(); toast(t('toast.saved')); renderInventory();
}

/* ========== Sales ========== */
function renderSales() {
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h3>${t('sales.title')}</h3>
        <button class="btn btn-primary" onclick="openInvoiceModal()">+ ${t('sales.newInvoice')}</button>
      </div>
      ${state.invoices.length === 0 ? `<div class="empty"><h4>${t('sales.noInvoices')}</h4></div>` :
      `<div class="table-wrap"><table><thead><tr>
        <th>#</th><th>${t('common.date')}</th><th>${t('sales.customer')}</th>
        <th>${t('common.amount')}</th><th>${t('sales.paid')}</th><th>${t('sales.remaining')}</th>
        <th>${t('common.status')}</th><th>${t('common.actions')}</th>
      </tr></thead><tbody>
        ${state.invoices.slice().reverse().map(inv => {
          const c = state.customers.find(x => x.id === inv.customerId);
          const rem = Math.max(0, num(inv.total) - num(inv.paid));
          const st = inv.status === 'cancelled' ? `<span class="badge badge-danger">✕</span>` :
            rem === 0 ? `<span class="badge badge-success">✓</span>` : `<span class="badge badge-warn">${fmt(rem)}</span>`;
          return `<tr>
            <td>${inv.no}</td><td>${esc(inv.date)}</td><td>${esc(c ? c.name : '-')}</td>
            <td>${fmt(inv.total)}</td><td>${fmt(inv.paid)}</td><td>${fmt(rem)}</td>
            <td>${st}</td>
            <td>
              ${inv.status !== 'cancelled' ? `<button class="btn btn-sm btn-secondary" onclick="openEditInvoice('${inv.id}')" title="${t('common.edit')}">✏️</button> ` : ''}
              ${inv.status !== 'cancelled' ? `<button class="btn btn-sm btn-secondary" onclick="printInvoice('${inv.id}')" title="${t('invoice.print')}">🖨</button> ` : ''}
              ${inv.status !== 'cancelled' ? `<button class="btn btn-sm btn-secondary" onclick="repeatInvoice('${inv.id}')" title="${t('invoice.repeat')}">↻</button> ` : ''}
              ${inv.status !== 'cancelled' && rem > 0 ? `<button class="btn btn-sm btn-primary" onclick="openCollectModal('${inv.id}')">${t('customers.collect')}</button> ` : ''}
              ${inv.status !== 'cancelled' ? `<button class="btn btn-sm btn-danger" onclick="cancelInvoice('${inv.id}')">${t('common.delete')}</button>` : ''}
            </td>
          </tr>`;
        }).join('')}
      </tbody></table></div>`}
    </div>`;
}
function openInvoiceModal() {
  if (!state.customers.length) { toast(LANG === 'ar' ? 'أضف عميلًا أولًا' : 'Add customer first', 'error'); navigate('customers'); return; }
  const batches = state.batches.filter(b => Math.max(0, num(b.availableQty) - num(b.soldQty)) > 0);
  if (!batches.length) { toast(t('toast.insufficientStock'), 'error'); return; }
  openModal(t('sales.newInvoice'), `
    <div class="form-grid">
      <div class="form-group"><label>${t('common.date')}</label><input type="date" id="inv_date" value="${todayISO()}"></div>
      <div class="form-group"><label>${t('sales.customer')}</label>
        <select id="inv_customer">${state.customers.map(c => `<option value="${c.id}">${esc(c.name)}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label>${t('sales.discount')}</label><input type="number" id="inv_discount" value="0"></div>
      <div class="form-group"><label>${t('sales.paid')}</label><input type="number" id="inv_paid" value="0"></div>
      <div class="form-group"><label>${t('installments.dueDate')}</label><input type="date" id="inv_dueDate"></div>
    </div>
    <div class="panel-head" style="margin-top:14px">
      <h3>${t('sales.items')}</h3>
      <button class="btn btn-sm btn-secondary" onclick="addInvoiceLine()">+ ${t('common.add')}</button>
    </div>
    <div id="inv_lines"></div>
    <div class="form-group full"><label>${t('common.notes')}</label><textarea id="inv_notes"></textarea></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveInvoice()">${t('common.save')}</button>`);
  addInvoiceLine();
}
function addInvoiceLine() {
  const batches = state.batches.filter(b => Math.max(0, num(b.availableQty) - num(b.soldQty)) > 0);
  const div = document.createElement('div');
  div.className = 'form-grid';
  div.style.cssText = 'margin-bottom:10px;padding:10px;background:var(--surface-2);border-radius:8px';
  div.innerHTML = `
    <div class="form-group"><label>${t('inventory.title')}</label>
      <select class="line-batch">${batches.map(b => `<option value="${b.id}">${esc(b.date)} — ${fmt(b.unitCost)}</option>`).join('')}</select>
    </div>
    <div class="form-group"><label>${t('common.qty')}</label><input type="number" class="line-qty" value="1" min="0.01" step="0.01"></div>
    <div class="form-group"><label>${t('sales.unitPrice')}</label><input type="number" class="line-price" value="${state.settings.sellPrice}" min="0" step="0.01"></div>`;
  document.getElementById('inv_lines').appendChild(div);
}
function saveInvoice() {
  const date = document.getElementById('inv_date').value;
  const customerId = document.getElementById('inv_customer').value;
  const discount = num(document.getElementById('inv_discount').value);
  const paidIn = num(document.getElementById('inv_paid').value);
  const dueDate = (document.getElementById('inv_dueDate') || {}).value || '';
  const notes = document.getElementById('inv_notes').value;
  const lines = Array.from(document.querySelectorAll('#inv_lines .form-grid')).map(d => ({
    batchId: d.querySelector('.line-batch').value,
    qty: num(d.querySelector('.line-qty').value),
    price: num(d.querySelector('.line-price').value),
  })).filter(l => l.qty > 0);
  if (!lines.length) { toast(t('toast.invalid'), 'error'); return; }
  for (const l of lines) {
    const b = state.batches.find(x => x.id === l.batchId);
    if (!b || l.qty > Math.max(0, num(b.availableQty) - num(b.soldQty))) { toast(t('toast.insufficientStock'), 'error'); return; }
  }
  const total = lines.reduce((s, l) => s + l.qty * l.price, 0) - discount;
  if (total < 0) { toast(t('toast.invalid'), 'error'); return; }
  const paid = Math.min(paidIn, total);
  const no = (state.invoices.length + 1).toString().padStart(4, '0');
  const inv = { id: uid('inv'), no, date, customerId, items: lines, discount, total, paid, remaining: total - paid,
    method: paid === 0 ? 'credit' : paid === total ? 'cash' : 'partial', notes, status: 'active', dueDate };
  state.invoices.push(inv);
  lines.forEach(l => { const b = state.batches.find(x => x.id === l.batchId); if (b) b.soldQty = num(b.soldQty) + l.qty; });
  if (paid > 0) addCashMovement({ date, type: 'sale', category: t('sales.invoice'), direction: 'in', amount: paid, method: 'cash', refId: inv.id });
  state.auditLog.push({ id: uid('log'), date, action: 'invoice_created', details: '#' + no });
  saveState(); closeModal(); toast(t('toast.saved')); fireConfetti(); renderSales(); updateCashPill();
}
function openEditInvoice(id) {
  const inv = state.invoices.find(x => x.id === id);
  if (!inv) return;
  openModal(t('common.edit') + ' — #' + inv.no, `
    <input type="hidden" id="inv_id" value="${id}">
    <div class="form-grid">
      <div class="form-group"><label>${t('common.date')}</label><input type="date" id="inv_date" value="${inv.date}"></div>
      <div class="form-group"><label>${t('sales.customer')}</label>
        <select id="inv_customer">${state.customers.map(c => `<option value="${c.id}" ${c.id === inv.customerId ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label>${t('sales.discount')}</label><input type="number" id="inv_discount" value="${inv.discount || 0}"></div>
      <div class="form-group"><label>${t('installments.dueDate')}</label><input type="date" id="inv_dueDate" value="${inv.dueDate || ''}"></div>
    </div>
    <div class="form-group full mt-16"><label>${t('common.notes')}</label><textarea id="inv_notes">${esc(inv.notes || '')}</textarea></div>
    <div class="mt-16 text-muted" style="font-size:12px">${t('msg.editHintInvoice')}</div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveEditInvoice()">${t('common.save')}</button>`);
}
function saveEditInvoice() {
  const id = document.getElementById('inv_id').value;
  const inv = state.invoices.find(x => x.id === id);
  if (!inv) return;
  const discount = num(document.getElementById('inv_discount').value);
  const subtotal = inv.items.reduce((s, it) => s + it.qty * it.price, 0);
  const newTotal = subtotal - discount;
  if (newTotal < num(inv.paid)) { toast(t('toast.invalid'), 'error'); return; }
  inv.date = document.getElementById('inv_date').value;
  inv.customerId = document.getElementById('inv_customer').value;
  inv.discount = discount;
  inv.total = newTotal;
  inv.remaining = newTotal - num(inv.paid);
  inv.dueDate = document.getElementById('inv_dueDate').value;
  inv.notes = document.getElementById('inv_notes').value;
  state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'invoice_edited', details: '#' + inv.no });
  saveState(); closeModal(); toast(t('toast.saved')); renderSales(); updateCashPill();
}
function cancelInvoice(id) {
  confirmDialog(t('toast.confirmDelete'), '', () => {
    const inv = state.invoices.find(x => x.id === id);
    if (!inv || inv.status === 'cancelled') return;
    inv.items.forEach(it => { const b = state.batches.find(x => x.id === it.batchId); if (b) b.soldQty = Math.max(0, num(b.soldQty) - num(it.qty)); });
    state.cashMovements = state.cashMovements.filter(m => !(m.refId === inv.id && m.type === 'sale'));
    inv.status = 'cancelled';
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'invoice_cancelled', details: '#' + inv.no });
    saveState(); toast(t('toast.deleted')); renderSales(); updateCashPill();
  });
}
function openCollectModal(invoiceId) {
  const inv = state.invoices.find(x => x.id === invoiceId);
  const rem = num(inv.total) - num(inv.paid);
  openModal(t('customers.collect'), `
    <div class="form-group"><label>${t('sales.remaining')}</label><input value="${fmt(rem)}" disabled></div>
    <div class="form-group"><label>${t('common.amount')}</label><input type="number" id="col_amount" value="${rem}" max="${rem}"></div>
    <div class="form-group"><label>${t('common.date')}</label><input type="date" id="col_date" value="${todayISO()}"></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveCollect('${invoiceId}')">${t('common.save')}</button>`);
}
function saveCollect(invoiceId) {
  const inv = state.invoices.find(x => x.id === invoiceId);
  const amount = num(document.getElementById('col_amount').value);
  const date = document.getElementById('col_date').value;
  const rem = num(inv.total) - num(inv.paid);
  if (amount <= 0 || amount > rem) { toast(t('toast.invalid'), 'error'); return; }
  inv.paid = num(inv.paid) + amount;
  inv.remaining = num(inv.total) - inv.paid;
  state.payments.push({ id: uid('pay'), date, customerId: inv.customerId, invoiceId: inv.id, amount, method: 'cash', notes: '' });
  addCashMovement({ date, type: 'collection', category: 'تحصيل', direction: 'in', amount, method: 'cash', refId: inv.id });
  state.auditLog.push({ id: uid('log'), date, action: 'payment', details: fmt(amount) });
  saveState(); closeModal(); toast(t('toast.saved')); fireConfetti(); renderSales(); updateCashPill();
}
function printInvoice(invoiceId) {
  const inv = state.invoices.find(x => x.id === invoiceId);
  if (!inv) return;
  const c = state.customers.find(x => x.id === inv.customerId);
  const dueDate = inv.dueDate || '';
  const rowsHTML = inv.items.map(it => {
    const b = state.batches.find(x => x.id === it.batchId);
    return `<tr><td>${b ? b.date : '-'}</td><td>${fmtNum(it.qty)}</td><td>${fmt(it.price)}</td><td>${fmt(it.qty * it.price)}</td></tr>`;
  }).join('');
  const qrData = `FAT-${inv.no}|${c ? c.name : ''}|${inv.total}|${inv.date}`;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(qrData)}`;
  const area = document.getElementById('printArea');
  area.innerHTML = `
    <div class="invoice-paper">
      <div class="head">
        <div class="right">
          <h1>🌶️ FelFel Manager</h1>
          <div>${esc(state.settings.partner1)} / ${esc(state.settings.partner2)}</div>
          ${state.settings.sellerPhone ? `<div>${esc(state.settings.sellerPhone)}</div>` : ''}
        </div>
        <div class="left">
          <div><b>${t('print.invoiceNo')}:</b> ${inv.no}</div>
          <div><b>${t('common.date')}:</b> ${inv.date}</div>
          ${dueDate ? `<div><b>${t('print.dueDate')}:</b> ${dueDate}</div>` : ''}
        </div>
      </div>
      <div style="margin-bottom:12pt">
        <b>${t('sales.customer')}:</b> ${esc(c ? c.name : '-')}
        ${c && c.phone ? `<br><b>${t('customers.phone')}:</b> ${esc(c.phone)}` : ''}
        ${c && c.address ? `<br><b>${t('customers.address')}:</b> ${esc(c.address)}` : ''}
      </div>
      <table><thead><tr>
        <th>${t('inventory.title')}</th><th>${t('common.qty')}</th>
        <th>${t('sales.unitPrice')}</th><th>${t('common.amount')}</th>
      </tr></thead><tbody>${rowsHTML}</tbody></table>
      <div class="totals"><table>
        <tr><td>${t('common.amount')}</td><td>${fmt(inv.items.reduce((s, it) => s + it.qty * it.price, 0))}</td></tr>
        ${inv.discount > 0 ? `<tr><td>${t('sales.discount')}</td><td>-${fmt(inv.discount)}</td></tr>` : ''}
        <tr><td><b>${t('common.total')}</b></td><td><b>${fmt(inv.total)}</b></td></tr>
        <tr><td>${t('sales.paid')}</td><td>${fmt(inv.paid)}</td></tr>
        <tr><td>${t('sales.remaining')}</td><td>${fmt(inv.total - inv.paid)}</td></tr>
      </table></div>
      <div class="footer">
        <div>${t('print.thanks')}</div>
        <div class="qr-box"><img src="${qrUrl}" alt="QR" onerror="this.style.display='none'"></div>
      </div>
    </div>`;
  setTimeout(() => window.print(), 150);
}
function repeatInvoice(invoiceId) {
  const old = state.invoices.find(x => x.id === invoiceId);
  if (!old) return;
  const validItems = old.items.filter(it => {
    const b = state.batches.find(x => x.id === it.batchId);
    if (!b) return false;
    const avail = Math.max(0, num(b.availableQty) - num(b.soldQty));
    return avail >= it.qty;
  });
  if (!validItems.length) { toast(t('toast.insufficientStock'), 'error'); return; }
  const no = (state.invoices.length + 1).toString().padStart(4, '0');
  const total = validItems.reduce((s, it) => s + it.qty * it.price, 0);
  const newInv = { id: uid('inv'), no, date: todayISO(), customerId: old.customerId,
    items: validItems.map(it => ({ batchId: it.batchId, qty: it.qty, price: it.price })),
    discount: 0, total, paid: 0, remaining: total, method: 'credit',
    notes: 'مكرر من #' + old.no, status: 'active', dueDate: '' };
  state.invoices.push(newInv);
  validItems.forEach(it => { const b = state.batches.find(x => x.id === it.batchId); if (b) b.soldQty = num(b.soldQty) + it.qty; });
  state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'invoice_created', details: 'Repeat #' + no });
  saveState(); toast(t('toast.saved')); fireConfetti(); navigate('sales'); updateCashPill();
}

/* ========== Customers ========== */
function renderCustomers() {
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h3>${t('customers.title')}</h3>
        <button class="btn btn-primary" onclick="openCustomerModal()">+ ${t('customers.new')}</button>
      </div>
      ${state.customers.length === 0 ? `<div class="empty"><h4>${t('customers.noCustomers')}</h4></div>` :
      `<div class="table-wrap"><table><thead><tr>
        <th>#</th><th>${t('customers.name')}</th><th>${t('customers.phone')}</th>
        <th>${t('customers.totalInvoices')}</th><th>${t('customers.totalPaid')}</th>
        <th>${t('customers.balance')}</th><th>${t('common.actions')}</th>
      </tr></thead><tbody>
        ${state.customers.map((c, i) => {
          const invs = state.invoices.filter(x => x.customerId === c.id && x.status !== 'cancelled');
          const totInv = invs.reduce((s, x) => s + num(x.total), 0);
          const totPaid = invs.reduce((s, x) => s + num(x.paid), 0) + state.payments.filter(p => p.customerId === c.id).reduce((s, p) => s + num(p.amount), 0);
          const bal = Calc.customerBalance(c.id);
          const oldInvs = invs.filter(x => num(x.total) - num(x.paid) > 0);
          const invD = oldInvs.length ? Math.floor((Date.now() - new Date(oldInvs[0].date).getTime()) / 86400000) : 0;
          return `<tr>
            <td>${i + 1}</td><td>${esc(c.name)}</td><td>${esc(c.phone || '-')}</td>
            <td>${fmt(totInv)}</td><td>${fmt(totPaid)}</td>
            <td class="${bal <= 0 ? 'text-success' : (invD > 30 ? 'overdue' : 'due-warn')}"><b>${fmt(bal)}</b></td>
            <td>
              <button class="btn btn-sm btn-secondary" onclick="openStatement('${c.id}')">${t('customers.statement')}</button>
              <button class="btn btn-sm btn-secondary" onclick="openCustomerModal('${c.id}')" title="${t('common.edit')}">✏️</button>
              <button class="btn btn-sm btn-danger" onclick="deleteCustomer('${c.id}')" title="${t('common.delete')}">🗑️</button>
            </td>
          </tr>`;
        }).join('')}
      </tbody></table></div>`}
    </div>`;
}
function openCustomerModal(id) {
  const existing = id ? state.customers.find(c => c.id === id) : null;
  openModal((existing ? t('common.edit') : t('customers.new')), `
    <input type="hidden" id="c_id" value="${existing ? existing.id : ''}">
    <div class="form-grid">
      <div class="form-group"><label>${t('customers.name')}</label><input id="c_name" value="${existing ? esc(existing.name) : ''}"></div>
      <div class="form-group"><label>${t('customers.phone')}</label><input id="c_phone" value="${existing ? esc(existing.phone || '') : ''}"></div>
      <div class="form-group"><label>${t('customers.address')}</label><input id="c_address" value="${existing ? esc(existing.address || '') : ''}"></div>
      <div class="form-group"><label>${t('customers.defaultPrice')}</label><input type="number" id="c_defaultPrice" value="${existing ? existing.defaultPrice : state.settings.sellPrice}"></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveCustomer()">${t('common.save')}</button>`);
}
function saveCustomer() {
  const id = document.getElementById('c_id').value;
  const name = document.getElementById('c_name').value.trim();
  if (!name) { toast(t('toast.invalid'), 'error'); return; }
  const data = {
    name,
    phone: document.getElementById('c_phone').value.trim(),
    address: document.getElementById('c_address').value.trim(),
    defaultPrice: num(document.getElementById('c_defaultPrice').value)
  };
  if (id) {
    const c = state.customers.find(x => x.id === id);
    Object.assign(c, data);
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'customer_edited', details: name });
  } else {
    state.customers.push({ id: uid('cus'), ...data });
  }
  saveState(); closeModal(); toast(t('toast.saved')); renderCustomers();
}
function deleteCustomer(id) {
  const linked = state.invoices.filter(i => i.customerId === id && i.status !== 'cancelled');
  if (linked.length > 0) { toast(t('msg.customerHasInvoices'), 'error'); return; }
  confirmDialog(t('toast.confirmDelete'), '', () => {
    state.customers = state.customers.filter(c => c.id !== id);
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'customer_deleted', details: id });
    saveState(); toast(t('toast.deleted')); renderCustomers();
  });
}
function openStatement(customerId) {
  const c = state.customers.find(x => x.id === customerId);
  const rows = [];
  state.invoices.filter(i => i.customerId === customerId && i.status !== 'cancelled').forEach(i => {
    rows.push({ date: i.date, desc: `${t('sales.invoice')} #${i.no}`, debit: num(i.total), credit: num(i.paid) });
  });
  state.payments.filter(p => p.customerId === customerId).forEach(p => {
    rows.push({ date: p.date, desc: t('customers.collect'), debit: 0, credit: num(p.amount) });
  });
  rows.sort((a, b) => (a.date || '').localeCompare(b.date || ''));
  let bal = 0;
  const tableRows = rows.map(r => {
    bal += r.debit - r.credit;
    return `<tr><td>${esc(r.date)}</td><td>${esc(r.desc)}</td><td>${r.debit ? fmt(r.debit) : '-'}</td><td>${r.credit ? fmt(r.credit) : '-'}</td><td>${fmt(bal)}</td></tr>`;
  }).join('');
  openModal(`${t('customers.statement')} — ${c.name}`, `
    <div class="table-wrap"><table>
      <thead><tr><th>${t('common.date')}</th><th>${t('common.notes')}</th><th>مدين</th><th>دائن</th><th>${t('customers.balance')}</th></tr></thead>
      <tbody>${tableRows || `<tr><td colspan="5" class="text-muted">${t('common.empty')}</td></tr>`}</tbody>
    </table></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.close')}</button>`);
}

/* ========== Expenses ========== */
function renderExpenses() {
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h3>${t('expenses.title')}</h3>
        <button class="btn btn-primary" onclick="openExpenseModal()">+ ${t('expenses.new')}</button>
      </div>
      ${state.expenses.length === 0 ? `<div class="empty"><h4>${t('expenses.noExpenses')}</h4></div>` :
      `<div class="table-wrap"><table><thead><tr>
        <th>${t('common.date')}</th><th>${t('expenses.category')}</th><th>${t('expenses.desc')}</th>
        <th>${t('common.amount')}</th><th>${t('expenses.receiver')}</th><th>${t('common.actions')}</th>
      </tr></thead><tbody>
        ${state.expenses.slice().reverse().map(e => `<tr>
          <td>${esc(e.date)}</td><td>${esc(e.category)}</td><td>${esc(e.desc)}</td>
          <td class="text-danger">${fmt(e.amount)}</td><td>${esc(e.receiver || '-')}</td>
          <td>
            <button class="btn btn-sm btn-secondary" onclick="openExpenseModal('${e.id}')" title="${t('common.edit')}">✏️</button>
            <button class="btn btn-sm btn-danger" onclick="deleteExpense('${e.id}')" title="${t('common.delete')}">🗑️</button>
          </td>
        </tr>`).join('')}
      </tbody></table></div>`}
    </div>`;
}
function openExpenseModal(id) {
  const existing = id ? state.expenses.find(e => e.id === id) : null;
  openModal((existing ? t('common.edit') : t('expenses.new')), `
    <input type="hidden" id="e_id" value="${existing ? existing.id : ''}">
    <div class="form-grid">
      <div class="form-group"><label>${t('common.date')}</label><input type="date" id="e_date" value="${existing ? existing.date : todayISO()}"></div>
      <div class="form-group"><label>${t('expenses.category')}</label>
        <select id="e_cat">${state.settings.expenseCategories.map(c => `<option ${existing && existing.category === c ? 'selected' : ''}>${esc(c)}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label>${t('common.amount')}</label><input type="number" id="e_amount" value="${existing ? existing.amount : ''}"></div>
      <div class="form-group"><label>${t('expenses.receiver')}</label><input id="e_receiver" value="${existing ? esc(existing.receiver || '') : ''}"></div>
      <div class="form-group full"><label>${t('expenses.desc')}</label><input id="e_desc" value="${existing ? esc(existing.desc || '') : ''}"></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveExpense()">${t('common.save')}</button>`);
}
function saveExpense() {
  const id = document.getElementById('e_id').value;
  const amount = num(document.getElementById('e_amount').value);
  if (amount <= 0) { toast(t('toast.invalid'), 'error'); return; }
  const data = {
    date: document.getElementById('e_date').value,
    category: document.getElementById('e_cat').value,
    amount,
    desc: document.getElementById('e_desc').value.trim(),
    receiver: document.getElementById('e_receiver').value.trim(),
    method: 'cash'
  };
  if (id) {
    const e = state.expenses.find(x => x.id === id);
    state.cashMovements = state.cashMovements.filter(m => !(m.refId === id && m.type === 'expense'));
    Object.assign(e, data);
    addCashMovement({ date: e.date, type: 'expense', category: e.category, direction: 'out', amount, method: 'cash', refId: id });
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'expense_edited', details: e.category + ' ' + fmt(amount) });
  } else {
    const e = { id: uid('exp'), ...data };
    state.expenses.push(e);
    addCashMovement({ date: e.date, type: 'expense', category: e.category, direction: 'out', amount, method: 'cash', refId: e.id });
    state.auditLog.push({ id: uid('log'), date: e.date, action: 'expense_created', details: e.category + ' ' + fmt(amount) });
  }
  saveState(); closeModal(); toast(t('toast.saved')); renderExpenses(); updateCashPill();
}
function deleteExpense(id) {
  confirmDialog(t('toast.confirmDelete'), '', () => {
    state.cashMovements = state.cashMovements.filter(m => !(m.refId === id && m.type === 'expense'));
    state.expenses = state.expenses.filter(e => e.id !== id);
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'expense_deleted', details: id });
    saveState(); toast(t('toast.deleted')); renderExpenses(); updateCashPill();
  });
}

/* ========== Cashbox ========== */
function renderCashbox() {
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="stats-grid">
        <div class="stat-card"><div class="label">${t('cashbox.opening')}</div><div class="value">${fmt(state.settings.openingCash)}</div></div>
        <div class="stat-card"><div class="label">${t('cashbox.current')}</div><div class="value pos">${fmt(Calc.cashBalance())}</div></div>
      </div>
      <div class="row mt-16">
        <button class="btn btn-primary" onclick="openOpeningCashModal()">${t('cashbox.setOpening')}</button>
        <button class="btn btn-secondary" onclick="openCashMovementModal()">+ ${t('cashbox.newMovement')}</button>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${t('cashbox.title')}</h3></div>
      ${state.cashMovements.length === 0 ? `<div class="empty"><h4>${t('cashbox.noMovements')}</h4></div>` :
      `<div class="table-wrap"><table><thead><tr>
        <th>${t('common.date')}</th><th>${t('cashbox.category')}</th>
        <th>${t('cashbox.direction')}</th><th>${t('common.amount')}</th>
        <th>${t('cashbox.reason')}</th><th>${t('common.actions')}</th>
      </tr></thead><tbody>
        ${state.cashMovements.slice().reverse().map(m => `<tr>
          <td>${esc(m.date)}</td><td>${esc(m.category)}</td>
          <td>${m.direction === 'in' ? `<span class="badge badge-success">${t('cashbox.in')}</span>` : `<span class="badge badge-danger">${t('cashbox.out')}</span>`}</td>
          <td class="${m.direction === 'in' ? 'text-success' : 'text-danger'}">${fmt(m.amount)}</td>
          <td>${esc(m.reason || m.notes || '-')}</td>
          <td>
            ${m.type === 'manual' ? `<button class="btn btn-sm btn-secondary" onclick="openCashMovementModal('${m.id}')" title="${t('common.edit')}">✏️</button>
            <button class="btn btn-sm btn-danger" onclick="deleteCashMovement('${m.id}')" title="${t('common.delete')}">🗑️</button>` : `<span class="text-muted" style="font-size:11px">—</span>`}
          </td>
        </tr>`).join('')}
      </tbody></table></div>`}
    </div>`;
}
function openOpeningCashModal() {
  openModal(t('cashbox.setOpening'), `
    <div class="form-group"><label>${t('cashbox.opening')}</label><input type="number" id="oc_amount" value="${state.settings.openingCash || 0}"></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveOpeningCash()">${t('common.save')}</button>`);
}
function saveOpeningCash() {
  state.settings.openingCash = num(document.getElementById('oc_amount').value);
  state.settings.openingCashSet = true;
  saveState(); closeModal(); toast(t('toast.saved')); navigate(currentPage); updateCashPill();
}
function openCashMovementModal(id) {
  const existing = id ? state.cashMovements.find(m => m.id === id) : null;
  openModal((existing ? t('common.edit') : t('cashbox.newMovement')), `
    <input type="hidden" id="cm_id" value="${existing ? existing.id : ''}">
    <div class="form-grid">
      <div class="form-group"><label>${t('common.date')}</label><input type="date" id="cm_date" value="${existing ? existing.date : todayISO()}"></div>
      <div class="form-group"><label>${t('cashbox.direction')}</label>
        <select id="cm_dir">
          <option value="in" ${existing && existing.direction === 'in' ? 'selected' : ''}>${t('cashbox.in')}</option>
          <option value="out" ${existing && existing.direction === 'out' ? 'selected' : ''}>${t('cashbox.out')}</option>
        </select>
      </div>
      <div class="form-group"><label>${t('common.amount')}</label><input type="number" id="cm_amount" value="${existing ? existing.amount : ''}"></div>
      <div class="form-group"><label>${t('cashbox.category')}</label><input id="cm_cat" value="${existing ? esc(existing.category || '') : ''}"></div>
      <div class="form-group full"><label>${t('cashbox.reason')}</label><input id="cm_reason" value="${existing ? esc(existing.reason || '') : ''}"></div>
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveCashMovement()">${t('common.save')}</button>`);
}
function saveCashMovement() {
  const id = document.getElementById('cm_id').value;
  const amount = num(document.getElementById('cm_amount').value);
  if (amount <= 0) { toast(t('toast.invalid'), 'error'); return; }
  const dir = document.getElementById('cm_dir').value;
  const data = {
    date: document.getElementById('cm_date').value,
    type: 'manual',
    category: document.getElementById('cm_cat').value || 'manual',
    direction: dir, amount, method: 'cash',
    reason: document.getElementById('cm_reason').value
  };
  if (id) {
    const existing = state.cashMovements.find(m => m.id === id);
    const others = state.cashMovements.filter(m => m.id !== id);
    const balWithout = num(state.settings.openingCash) + others.reduce((s, m) => s + (m.direction === 'in' ? 1 : -1) * num(m.amount), 0);
    if (dir === 'out' && amount > balWithout) { toast(t('toast.insufficientCash'), 'error'); return; }
    Object.assign(existing, data);
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'cash_edited', details: id });
  } else {
    if (dir === 'out' && amount > Calc.cashBalance()) { toast(t('toast.insufficientCash'), 'error'); return; }
    addCashMovement(data);
  }
  saveState(); closeModal(); toast(t('toast.saved')); renderCashbox(); updateCashPill();
}
function deleteCashMovement(id) {
  const m = state.cashMovements.find(x => x.id === id);
  if (!m) return;
  if (m.type !== 'manual') { toast(t('msg.cashAutoOnly'), 'error'); return; }
  confirmDialog(t('toast.confirmDelete'), fmt(m.amount), () => {
    state.cashMovements = state.cashMovements.filter(x => x.id !== id);
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'cash_deleted', details: id });
    saveState(); toast(t('toast.deleted')); renderCashbox(); updateCashPill();
  });
}
function addCashMovement(m) {
  state.cashMovements.push({ id: uid('cash'), ...m });
}

/* ========== Workers ========== */
function renderWorkers() {
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head">
        <h3>${t('workers.title')}</h3>
        <button class="btn btn-primary" onclick="openWorkerModal()">+ ${t('workers.new')}</button>
      </div>
      ${state.workers.length === 0 ? `<div class="empty"><h4>${t('workers.noWorkers')}</h4></div>` :
      `<div class="table-wrap"><table><thead><tr>
        <th>${t('workers.name')}</th><th>${t('workers.rate')}</th><th>${t('workers.bagsWorked')}</th>
        <th>${t('workers.earned')}</th><th>${t('workers.paid')}</th><th>${t('workers.balance')}</th>
        <th>${t('common.status')}</th><th>${t('common.actions')}</th>
      </tr></thead><tbody>
        ${state.workers.map(w => {
          const bags = state.wageEntries.filter(x => x.workerId === w.id).reduce((s, x) => s + num(x.bags), 0);
          const earned = Calc.workerEarned(w.id), paid = Calc.workerPaid(w.id), bal = earned - paid;
          return `<tr>
            <td>${esc(w.name)}</td><td>${fmt(w.rate)}</td><td>${fmtNum(bags)}</td>
            <td>${fmt(earned)}</td><td>${fmt(paid)}</td>
            <td class="${bal > 0 ? 'text-danger' : 'text-success'}"><b>${fmt(bal)}</b></td>
            <td>${w.active ? `<span class="badge badge-success">${t('workers.active')}</span>` : `<span class="badge badge-danger">${t('workers.inactive')}</span>`}</td>
            <td>
              ${bal > 0 ? `<button class="btn btn-sm btn-primary" onclick="openPayWorker('${w.id}')">${t('workers.pay')}</button> ` : ''}
              <button class="btn btn-sm btn-secondary" onclick="openWorkerModal('${w.id}')" title="${t('common.edit')}">✏️</button>
              <button class="btn btn-sm btn-danger" onclick="deleteWorker('${w.id}')" title="${t('common.delete')}">🗑️</button>
            </td>
          </tr>`;
        }).join('')}
      </tbody></table></div>`}
    </div>`;
}
function openWorkerModal(id) {
  const existing = id ? state.workers.find(w => w.id === id) : null;
  openModal((existing ? t('common.edit') : t('workers.new')), `
    <input type="hidden" id="w_id" value="${existing ? existing.id : ''}">
    <div class="form-grid">
      <div class="form-group"><label>${t('workers.name')}</label><input id="w_name" value="${existing ? esc(existing.name) : ''}"></div>
      <div class="form-group"><label>${t('workers.rate')}</label><input type="number" id="w_rate" value="${existing ? existing.rate : state.settings.workerWage}"></div>
      ${existing ? `<div class="form-group"><label>${t('common.status')}</label>
        <select id="w_active">
          <option value="1" ${existing.active ? 'selected' : ''}>${t('workers.active')}</option>
          <option value="0" ${!existing.active ? 'selected' : ''}>${t('workers.inactive')}</option>
        </select></div>` : ''}
    </div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveWorker()">${t('common.save')}</button>`);
}
function saveWorker() {
  const id = document.getElementById('w_id').value;
  const name = document.getElementById('w_name').value.trim();
  if (!name) { toast(t('toast.invalid'), 'error'); return; }
  const rate = num(document.getElementById('w_rate').value);
  if (id) {
    const w = state.workers.find(x => x.id === id);
    w.name = name; w.rate = rate;
    const activeEl = document.getElementById('w_active');
    if (activeEl) w.active = activeEl.value === '1';
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'worker_edited', details: name });
  } else {
    state.workers.push({ id: uid('wrk'), name, rate, active: true });
  }
  saveState(); closeModal(); toast(t('toast.saved')); renderWorkers();
}
function deleteWorker(id) {
  const has = state.wageEntries.filter(w => w.workerId === id).length > 0;
  if (has) { toast(t('msg.workerHasWages'), 'error'); return; }
  confirmDialog(t('toast.confirmDelete'), '', () => {
    state.workers = state.workers.filter(w => w.id !== id);
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'worker_deleted', details: id });
    saveState(); toast(t('toast.deleted')); renderWorkers();
  });
}
function openPayWorker(id) {
  const bal = Calc.workerEarned(id) - Calc.workerPaid(id);
  openModal(t('workers.pay'), `
    <div class="form-group"><label>${t('workers.balance')}</label><input value="${fmt(bal)}" disabled></div>
    <div class="form-group"><label>${t('common.amount')}</label><input type="number" id="wp_amount" value="${bal}" max="${bal}"></div>
    <div class="form-group"><label>${t('common.date')}</label><input type="date" id="wp_date" value="${todayISO()}"></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="savePayWorker('${id}')">${t('common.save')}</button>`);
}
function savePayWorker(id) {
  const amount = num(document.getElementById('wp_amount').value);
  const date = document.getElementById('wp_date').value;
  const bal = Calc.workerEarned(id) - Calc.workerPaid(id);
  if (amount <= 0 || amount > bal) { toast(t('toast.invalid'), 'error'); return; }
  if (amount > Calc.cashBalance()) { toast(t('toast.insufficientCash'), 'error'); return; }
  state.wagePayments.push({ id: uid('wp'), workerId: id, amount, date, method: 'cash' });
  addCashMovement({ date, type: 'wage_payment', category: 'أجور عمال', direction: 'out', amount, method: 'cash', refId: id });
  state.auditLog.push({ id: uid('log'), date, action: 'worker_payment', details: fmt(amount) });
  saveState(); closeModal(); toast(t('toast.saved')); renderWorkers(); updateCashPill();
}

/* ========== Partners ========== */
function renderPartners() {
  const profit = Calc.netProfit();
  const p1 = profit * num(state.settings.share1) / 100;
  const p2 = profit * num(state.settings.share2) / 100;
  const d1 = Calc.partnerDrawings('p1'), d2 = Calc.partnerDrawings('p2');
  const drawingsList = state.drawings.slice().reverse();
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head"><h3>${t('partners.title')}</h3></div>
      <div class="stats-grid">
        <div class="stat-card"><div class="label">${t('partners.periodProfit')}</div><div class="value pos">${fmt(profit)}</div></div>
        <div class="stat-card"><div class="label">${t('partners.availableCash')}</div><div class="value">${fmt(Calc.cashBalance())}</div></div>
      </div>
    </div>
    <div class="panel">
      <div class="table-wrap"><table><thead><tr>
        <th>${t('partners.name')}</th><th>${t('partners.share')}</th>
        <th>${t('partners.profitShare')}</th><th>${t('partners.drawings')}</th>
        <th>${t('partners.balance')}</th><th>${t('common.actions')}</th>
      </tr></thead><tbody>
        <tr>
          <td>${esc(state.settings.partner1)}</td><td>${state.settings.share1}%</td>
          <td>${fmt(p1)}</td><td>${fmt(d1)}</td>
          <td class="${p1-d1 > 0 ? 'text-success' : 'text-danger'}"><b>${fmt(p1-d1)}</b></td>
          <td><button class="btn btn-sm btn-primary" onclick="openWithdraw('p1')">${t('partners.withdraw')}</button></td>
        </tr>
        <tr>
          <td>${esc(state.settings.partner2)}</td><td>${state.settings.share2}%</td>
          <td>${fmt(p2)}</td><td>${fmt(d2)}</td>
          <td class="${p2-d2 > 0 ? 'text-success' : 'text-danger'}"><b>${fmt(p2-d2)}</b></td>
          <td><button class="btn btn-sm btn-primary" onclick="openWithdraw('p2')">${t('partners.withdraw')}</button></td>
        </tr>
      </tbody></table></div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${t('partners.drawingsList')}</h3></div>
      ${drawingsList.length === 0 ? `<p class="text-muted">${t('common.empty')}</p>` :
      `<div class="table-wrap"><table><thead><tr>
        <th>${t('common.date')}</th><th>${t('partners.name')}</th>
        <th>${t('common.amount')}</th><th>${t('common.actions')}</th>
      </tr></thead><tbody>
        ${drawingsList.map(d => {
          const pn = d.partnerId === 'p1' ? state.settings.partner1 : state.settings.partner2;
          return `<tr>
            <td>${esc(d.date)}</td><td>${esc(pn)}</td><td class="text-danger">${fmt(d.amount)}</td>
            <td>
              <button class="btn btn-sm btn-secondary" onclick="openWithdraw('${d.partnerId}','${d.id}')" title="${t('common.edit')}">✏️</button>
              <button class="btn btn-sm btn-danger" onclick="deleteDrawing('${d.id}')" title="${t('common.delete')}">🗑️</button>
            </td>
          </tr>`;
        }).join('')}
      </tbody></table></div>`}
    </div>`;
}
function openWithdraw(partnerId, drawingId) {
  const existing = drawingId ? state.drawings.find(d => d.id === drawingId) : null;
  const balanceFor = Calc.cashBalance() + (existing ? num(existing.amount) : 0);
  openModal(existing ? t('common.edit') : t('partners.withdraw'), `
    <input type="hidden" id="dw_id" value="${existing ? existing.id : ''}">
    <input type="hidden" id="dw_partner" value="${partnerId}">
    <div class="form-group"><label>${t('partners.availableCash')}</label><input value="${fmt(balanceFor)}" disabled></div>
    <div class="form-group"><label>${t('common.amount')}</label><input type="number" id="dw_amount" value="${existing ? existing.amount : ''}" max="${balanceFor}"></div>
    <div class="form-group"><label>${t('common.date')}</label><input type="date" id="dw_date" value="${existing ? existing.date : todayISO()}"></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>
     <button class="btn btn-primary" onclick="saveWithdraw('${partnerId}')">${t('common.save')}</button>`);
}
function saveWithdraw(partnerId) {
  const id = document.getElementById('dw_id').value;
  const existing = id ? state.drawings.find(d => d.id === id) : null;
  const amount = num(document.getElementById('dw_amount').value);
  const date = document.getElementById('dw_date').value;
  const balanceFor = Calc.cashBalance() + (existing ? num(existing.amount) : 0);
  if (amount <= 0 || amount > balanceFor) { toast(t('toast.insufficientCash'), 'error'); return; }
  if (existing) {
    state.cashMovements = state.cashMovements.filter(m => !(m.refId === existing.id && m.type === 'partner_drawing'));
    Object.assign(existing, { amount, date });
    addCashMovement({ date, type: 'partner_drawing', category: t('partners.drawings'), direction: 'out', amount, method: 'cash', refId: existing.id });
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'drawing_edited', details: existing.id });
  } else {
    const drawing = { id: uid('drw'), partnerId, amount, date };
    state.drawings.push(drawing);
    addCashMovement({ date, type: 'partner_drawing', category: t('partners.drawings'), direction: 'out', amount, method: 'cash', refId: drawing.id });
    state.auditLog.push({ id: uid('log'), date, action: 'withdrawal', details: fmt(amount) });
  }
  saveState(); closeModal(); toast(t('toast.saved')); renderPartners(); updateCashPill();
}
function deleteDrawing(id) {
  const d = state.drawings.find(x => x.id === id);
  if (!d) return;
  confirmDialog(t('toast.confirmDelete'), fmt(d.amount), () => {
    state.cashMovements = state.cashMovements.filter(m => !(m.refId === id && m.type === 'partner_drawing'));
    state.drawings = state.drawings.filter(x => x.id !== id);
    state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'drawing_deleted', details: id });
    saveState(); toast(t('toast.deleted')); renderPartners(); updateCashPill();
  });
}

/* ========== Reports ========== */
function renderReports() {
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head"><h3>${t('reports.title')}</h3></div>
      <div class="form-grid">
        <div class="form-group"><label>${t('reports.from')}</label><input type="date" id="r_from"></div>
        <div class="form-group"><label>${t('reports.to')}</label><input type="date" id="r_to"></div>
        <div class="form-group"><label>&nbsp;</label><button class="btn btn-primary" onclick="runReports()">${t('common.search')}</button></div>
      </div>
    </div>
    <div id="reportOutput"></div>`;
  runReports();
}
function runReports() {
  const from = (document.getElementById('r_from') || {}).value || '';
  const to = (document.getElementById('r_to') || {}).value || '';
  const out = document.getElementById('reportOutput');
  if (!out) return;
  const sales = Calc.totalSales(from, to), cogs = Calc.cogsRange(from, to), op = Calc.operatingExpenses(from, to);
  const profit = sales - cogs - op;
  const expByCat = {}, salesByCust = {}, salesByBatch = {};
  state.expenses.filter(e => withinRange(e.date, from, to)).forEach(e => expByCat[e.category] = (expByCat[e.category] || 0) + num(e.amount));
  state.invoices.filter(i => i.status !== 'cancelled' && withinRange(i.date, from, to)).forEach(i => {
    const c = state.customers.find(x => x.id === i.customerId);
    const k = c ? c.name : '-';
    salesByCust[k] = (salesByCust[k] || 0) + num(i.total);
    i.items.forEach(it => {
      const b = state.batches.find(x => x.id === it.batchId);
      const bk = b ? b.date : '-';
      salesByBatch[bk] = (salesByBatch[bk] || 0) + it.qty * it.price;
    });
  });
  const debts = state.customers.map(c => [c.name, Calc.customerBalance(c.id)]).filter(r => r[1] > 0);
  const invRows = state.batches.map(b => [b.date, Math.max(0, num(b.availableQty) - num(b.soldQty)), b.unitCost]);
  const cmp = comparePeriods(from, to);

  out.innerHTML = `
    <div class="panel"><div class="panel-head"><h3>${t('reports.profitReport')}</h3>
      <div class="row">
        <button class="btn btn-sm btn-secondary" onclick="exportTableCSV('profitTable')">${t('common.export')}</button>
        <button class="btn btn-sm btn-secondary" onclick="exportTableExcel('profitTable')">${t('export.excel')}</button>
      </div></div>
      <table id="profitTable"><tbody>
        <tr><td>${t('dashboard.periodSales')}</td><td>${fmt(sales)}</td></tr>
        <tr><td>${t('dashboard.cogs')}</td><td>${fmt(cogs)}</td></tr>
        <tr><td>${t('dashboard.expenses')}</td><td>${fmt(op)}</td></tr>
        <tr><td><b>${t('dashboard.netProfit')}</b></td><td><b class="${profit>=0?'text-success':'text-danger'}">${fmt(profit)}</b></td></tr>
        <tr><td>${esc(state.settings.partner1)} (${state.settings.share1}%)</td><td>${fmt(profit*num(state.settings.share1)/100)}</td></tr>
        <tr><td>${esc(state.settings.partner2)} (${state.settings.share2}%)</td><td>${fmt(profit*num(state.settings.share2)/100)}</td></tr>
      </tbody></table>
    </div>
    ${cmp ? `<div class="panel">
      <div class="panel-head"><h3>${t('reports.comparison')}</h3></div>
      <table><thead><tr>
        <th></th><th>${t('reports.current')}</th><th>${t('reports.prev')}</th><th>${t('reports.growth')}</th>
      </tr></thead><tbody>
        <tr>
          <td>${t('dashboard.periodSales')}</td>
          <td>${fmt(cmp.curSales)}</td>
          <td>${fmt(cmp.prevSales)}</td>
          <td class="${cmp.growth >= 0 ? 'text-success' : 'text-danger'}">${fmtNum(cmp.growth)}%</td>
        </tr>
        <tr>
          <td>${t('dashboard.netProfit')}</td>
          <td>${fmt(cmp.curProfit)}</td>
          <td>${fmt(cmp.prevProfit)}</td>
          <td class="${cmp.curProfit >= cmp.prevProfit ? 'text-success' : 'text-danger'}">${fmt(cmp.curProfit - cmp.prevProfit)}</td>
        </tr>
      </tbody></table>
    </div>` : ''}
    ${reportTable('salesByCustTable', t('reports.salesByCustomer'), Object.entries(salesByCust), t('sales.customer'))}
    ${reportTable('salesByBatchTable', t('reports.salesByProduct'), Object.entries(salesByBatch), t('inventory.title'))}
    ${reportTable('expByCatTable', t('reports.expensesByCat'), Object.entries(expByCat), t('expenses.category'))}
    ${reportTable('debtsTable', t('reports.customerDebts'), debts, t('customers.name'))}
    <div class="panel"><div class="panel-head"><h3>${t('reports.inventoryReport')}</h3></div>
      <table><thead><tr><th>${t('common.date')}</th><th>${t('inventory.remaining')}</th><th>${t('inventory.unitCost')}</th></tr></thead>
      <tbody>${invRows.map(r => `<tr><td>${r[0]}</td><td>${fmtNum(r[1])}</td><td>${fmt(r[2])}</td></tr>`).join('') || `<tr><td colspan="3" class="text-muted">${t('reports.noData')}</td></tr>`}</tbody>
      </table>
    </div>
    <div class="panel"><button class="btn btn-secondary" onclick="exportFullJSON()">${t('reports.exportJson')}</button></div>`;
}
function reportTable(id, title, rows, col) {
  return `<div class="panel"><div class="panel-head"><h3>${title}</h3>
    <div class="row">
      <button class="btn btn-sm btn-secondary" onclick="exportTableCSV('${id}')">${t('common.export')}</button>
      <button class="btn btn-sm btn-secondary" onclick="exportTableExcel('${id}')">${t('export.excel')}</button>
    </div></div>
    <table id="${id}"><thead><tr><th>${col}</th><th>${t('common.amount')}</th></tr></thead>
    <tbody>${rows.length ? rows.map(r => `<tr><td>${esc(r[0])}</td><td>${fmt(r[1])}</td></tr>`).join('') : `<tr><td colspan="2" class="text-muted">${t('reports.noData')}</td></tr>`}</tbody>
    </table></div>`;
}
function comparePeriods(from, to) {
  if (!from || !to) return null;
  const fromD = new Date(from), toD = new Date(to);
  const days = Math.round((toD - fromD) / 86400000) + 1;
  const prevTo = new Date(fromD); prevTo.setDate(prevTo.getDate() - 1);
  const prevFrom = new Date(prevTo); prevFrom.setDate(prevFrom.getDate() - days + 1);
  const prevFromStr = prevFrom.toISOString().slice(0, 10);
  const prevToStr = prevTo.toISOString().slice(0, 10);
  const curSales = Calc.totalSales(from, to);
  const prevSales = Calc.totalSales(prevFromStr, prevToStr);
  const curProfit = Calc.netProfit(from, to);
  const prevProfit = Calc.netProfit(prevFromStr, prevToStr);
  const growth = prevSales > 0 ? ((curSales - prevSales) / prevSales) * 100 : (curSales > 0 ? 100 : 0);
  return { curSales, prevSales, curProfit, prevProfit, growth };
}
function exportTableCSV(id) {
  const tbl = document.getElementById(id);
  if (!tbl) return;
  const rows = Array.from(tbl.querySelectorAll('tr')).map(tr =>
    Array.from(tr.querySelectorAll('th,td')).map(td => `"${td.textContent.trim().replace(/"/g,'""')}"`).join(','));
  downloadFile(id + '.csv', '\ufeff' + rows.join('\n'), 'text/csv');
}
function exportTableExcel(id) {
  const tbl = document.getElementById(id);
  if (!tbl) return;
  let html = '<html><head><meta charset="UTF-8"></head><body><table border="1">';
  tbl.querySelectorAll('tr').forEach(tr => {
    html += '<tr>';
    tr.querySelectorAll('th,td').forEach(td => {
      const tag = td.tagName.toLowerCase();
      html += `<${tag}>${td.textContent.trim()}</${tag}>`;
    });
    html += '</tr>';
  });
  html += '</table></body></html>';
  downloadFile(id + '.xls', html, 'application/vnd.ms-excel');
}
function downloadFile(name, content, type) {
  const blob = new Blob([content], { type: type || 'application/octet-stream' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = name; a.click();
  URL.revokeObjectURL(url);
}

/* ========== Charts ========== */
function drawLineChart(canvas, data, labels, color) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0) return;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width, H = rect.height;
  ctx.clearRect(0, 0, W, H);
  if (!data.length) return;
  const max = Math.max(...data, 1);
  const min = Math.min(...data, 0);
  const range = max - min || 1;
  const col = color || getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  const mutedCol = getComputedStyle(document.documentElement).getPropertyValue('--muted').trim();
  const stepX = W / Math.max(1, data.length - 1);
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, col + '55');
  grad.addColorStop(1, col + '00');
  ctx.beginPath();
  ctx.moveTo(0, H - 20);
  data.forEach((v, i) => {
    const x = i * stepX;
    const y = H - 22 - ((v - min) / range) * (H - 32);
    ctx.lineTo(x, y);
  });
  ctx.lineTo(W, H - 20);
  ctx.closePath();
  ctx.fillStyle = grad;
  ctx.fill();
  ctx.beginPath();
  data.forEach((v, i) => {
    const x = i * stepX;
    const y = H - 22 - ((v - min) / range) * (H - 32);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.strokeStyle = col;
  ctx.lineWidth = 2;
  ctx.stroke();
  data.forEach((v, i) => {
    const x = i * stepX;
    const y = H - 22 - ((v - min) / range) * (H - 32);
    ctx.fillStyle = col;
    ctx.beginPath();
    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fill();
    if (labels[i] && (i % Math.ceil(labels.length / 6) === 0 || labels.length <= 8)) {
      ctx.fillStyle = mutedCol;
      ctx.font = '9px Cairo, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(labels[i], x, H - 6);
    }
  });
}
function drawBarChart(canvas, data, labels, color) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  if (rect.width === 0) return;
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.scale(dpr, dpr);
  const W = rect.width, H = rect.height;
  ctx.clearRect(0, 0, W, H);
  if (!data.length) return;
  const max = Math.max(...data, 1);
  const barSpace = W / data.length;
  const barW = Math.max(4, barSpace * 0.65);
  const col = color || getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
  const mutedCol = getComputedStyle(document.documentElement).getPropertyValue('--muted').trim();
  data.forEach((v, i) => {
    const h = (v / max) * (H - 28);
    const x = i * barSpace + (barSpace - barW) / 2;
    const y = H - 22 - h;
    ctx.fillStyle = col;
    ctx.globalAlpha = 0.85;
    ctx.fillRect(x, y, barW, h);
    ctx.globalAlpha = 1;
    if (labels[i] && (i % Math.ceil(labels.length / 8) === 0 || labels.length <= 10)) {
      ctx.fillStyle = mutedCol;
      ctx.font = '9px Cairo, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(labels[i], x + barW / 2, H - 6);
    }
  });
}
function renderDashboardCharts() {
  const days = 30;
  const dailySales = {}, dailyProfit = {};
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    dailySales[key] = 0;
    dailyProfit[key] = 0;
  }
  state.invoices.filter(i => i.status !== 'cancelled').forEach(i => {
    if (dailySales[i.date] !== undefined) {
      dailySales[i.date] += num(i.total);
      i.items.forEach(it => {
        const b = state.batches.find(x => x.id === it.batchId);
        if (b) dailyProfit[i.date] += it.qty * (it.price - num(b.unitCost));
      });
    }
  });
  const labels = Object.keys(dailySales).map(d => d.slice(5));
  drawLineChart(document.getElementById('chartSales'), Object.values(dailySales), labels);
  drawBarChart(document.getElementById('chartProfit'), Object.values(dailyProfit), labels, '#0FB864');
}

/* ========== Activity ========== */
function renderActivity() {
  const logs = state.auditLog.slice().reverse();
  const icons = {
    invoice_created: '▤', invoice_cancelled: '✕', invoice_edited: '✏️', batch_created: '▦',
    batch_edited: '✏️', batch_deleted: '🗑️', expense_created: '◈', expense_edited: '✏️',
    expense_deleted: '🗑️', payment: '◉', withdrawal: '◑', drawing_edited: '✏️',
    drawing_deleted: '🗑️', adjust: '⚙', settings: '⚙', worker_payment: '◐',
    customer_edited: '✏️', customer_deleted: '🗑️', worker_edited: '✏️',
    worker_deleted: '🗑️', cash_edited: '✏️', cash_deleted: '🗑️',
  };
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head"><h3>${t('nav.activity')}</h3></div>
      ${logs.length === 0 ? `<div class="empty"><h4>${t('common.empty')}</h4></div>` : `
        <div class="log-list">
          ${logs.map(l => `
            <div class="log-item">
              <div class="log-ico">${icons[l.action] || '•'}</div>
              <div class="log-body">
                <div class="log-title">${esc(t('action.' + l.action) || l.action)}</div>
                <div class="log-meta">${esc(l.details || '')} · ${esc(l.date || '')}</div>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    </div>`;
}

/* ========== Profit Calculator ========== */
let calcTab = 'profit';
function openProfitCalc() {
  openModal(t('profit.title'), `
    <div class="calc-tabs">
      <button class="calc-tab ${calcTab==='profit'?'active':''}" onclick="switchCalcTab('profit')">${t('profit.tab1')}</button>
      <button class="calc-tab ${calcTab==='price'?'active':''}" onclick="switchCalcTab('price')">${t('profit.tab2')}</button>
    </div>
    <div id="calcBody"></div>
  `, `<button class="btn btn-secondary" onclick="closeModal()">${t('common.close')}</button>`);
  renderCalcBody();
}
function switchCalcTab(tab) {
  calcTab = tab;
  document.querySelectorAll('.calc-tab').forEach((b, i) => b.classList.toggle('active', (i === 0) === (tab === 'profit')));
  renderCalcBody();
}
function renderCalcBody() {
  const body = document.getElementById('calcBody');
  if (!body) return;
  if (calcTab === 'profit') {
    body.innerHTML = `
      <div class="form-grid">
        <div class="form-group"><label>${t('profit.buyPrice')}</label><input type="number" id="pc_buy" value="${state.settings.buyPrice}"></div>
        <div class="form-group"><label>${t('profit.bags')}</label><input type="number" id="pc_bags" value="1" min="1"></div>
        <div class="form-group"><label>${t('profit.sellPrice')}</label><input type="number" id="pc_sell" value="${state.settings.sellPrice}"></div>
        <div class="form-group"><label>${t('profit.workersCost')}</label><input type="number" id="pc_workers" value="${state.settings.workerWage * 2}"></div>
        <div class="form-group"><label>${t('profit.otherCost')}</label><input type="number" id="pc_other" value="${state.settings.opCost}"></div>
        <div class="form-group"><label>${t('profit.weight')}</label><input type="number" id="pc_weight" value="0" step="0.01"></div>
      </div>
      <div class="mt-16"><button class="btn btn-primary" onclick="calcProfit()">${t('profit.calc')}</button></div>
      <div id="profitResult"></div>
    `;
    ['pc_buy','pc_bags','pc_sell','pc_workers','pc_other','pc_weight'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', calcProfit);
    });
    calcProfit();
  } else {
    body.innerHTML = `
      <div class="form-grid">
        <div class="form-group"><label>${t('profit.costPerKg')}</label><input type="number" id="sp_cost" value="0" step="0.01"></div>
        <div class="form-group"><label>${t('profit.targetMargin')}</label><input type="number" id="sp_margin" value="50" min="0" max="200"></div>
      </div>
      <div class="mt-16"><button class="btn btn-primary" onclick="calcSuggestedPrice()">${t('profit.calc')}</button></div>
      <div id="priceResult"></div>
    `;
    ['sp_cost','sp_margin'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', calcSuggestedPrice);
    });
    calcSuggestedPrice();
  }
}
function calcProfit() {
  const buy = num(document.getElementById('pc_buy').value);
  const bags = Math.max(1, num(document.getElementById('pc_bags').value));
  const sell = num(document.getElementById('pc_sell').value);
  const workers = num(document.getElementById('pc_workers').value);
  const other = num(document.getElementById('pc_other').value);
  const weight = num(document.getElementById('pc_weight').value);
  const revenue = bags * sell;
  const cost = bags * (buy + workers + other);
  const profit = revenue - cost;
  const margin = revenue > 0 ? (profit / revenue) * 100 : 0;
  const perBag = bags > 0 ? profit / bags : 0;
  const kgCost = weight > 0 ? cost / weight : 0;
  const el = document.getElementById('profitResult');
  if (!el) return;
  el.innerHTML = `
    <div class="calc-result">
      <div class="row-between"><span>${t('profit.expectedRevenue')}</span><span>${fmt(revenue)}</span></div>
      <div class="row-between"><span>${t('profit.totalCost')}</span><span class="text-danger">${fmt(cost)}</span></div>
      <div class="row-between"><span>${t('profit.perBag')}</span><span>${fmt(perBag)}</span></div>
      ${weight > 0 ? `<div class="row-between"><span>${t('profit.costPerKg')}</span><span>${fmt(kgCost)}</span></div>` : ''}
      <div class="row-between big ${profit < 0 ? 'loss' : ''}">
        <span>${t('profit.expectedProfit')}</span>
        <span class="v">${fmt(profit)}</span>
      </div>
      <div class="row-between"><span>${t('profit.margin')}</span><span>${fmtNum(margin)}%</span></div>
    </div>
  `;
}
function calcSuggestedPrice() {
  const cost = num(document.getElementById('sp_cost').value);
  const margin = num(document.getElementById('sp_margin').value);
  const price = cost * (1 + margin / 100);
  const el = document.getElementById('priceResult');
  if (!el) return;
  el.innerHTML = `
    <div class="calc-result">
      <div class="row-between big">
        <span>${t('profit.suggestedPrice')}</span>
        <span class="v">${fmt(price)}</span>
      </div>
    </div>
  `;
}

/* ========== Settings ========== */
function renderSettings() {
  const s = state.settings;
  const accents = ['#0FB864','#16DD79','#0A9A52','#046A38','#34E68C'];
  document.getElementById('content').innerHTML = `
    <div class="panel">
      <div class="panel-head"><h3>${t('settings.general')}</h3></div>
      <div class="form-grid">
        <div class="form-group"><label>${t('settings.lang')}</label>
          <select id="set_lang"><option value="ar">العربية</option><option value="en">English</option></select></div>
        <div class="form-group"><label>${t('settings.theme')}</label>
          <select id="set_theme"><option value="dark">Dark</option><option value="light">Light</option></select></div>
        <div class="form-group full"><label>${t('settings.accent')}</label>
          <div class="row">${accents.map(c => `<button class="btn btn-sm ${ACCENT===c?'btn-primary':'btn-secondary'}" style="background:${c};color:#fff;border-color:${c}" onclick="applyAccent('${c}');renderSettings()">${c}</button>`).join('')}</div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${t('settings.defaults')}</h3></div>
      <div class="form-grid">
        <div class="form-group"><label>${t('settings.buyPrice')}</label><input type="number" id="s_buyPrice" value="${s.buyPrice}"></div>
        <div class="form-group"><label>${t('settings.sellPrice')}</label><input type="number" id="s_sellPrice" value="${s.sellPrice}"></div>
        <div class="form-group"><label>${t('settings.workerWage')}</label><input type="number" id="s_workerWage" value="${s.workerWage}"></div>
        <div class="form-group"><label>${t('settings.opCost')}</label><input type="number" id="s_opCost" value="${s.opCost}"></div>
        <div class="form-group"><label>${t('settings.partner1')}</label><input id="s_p1" value="${esc(s.partner1)}"></div>
        <div class="form-group"><label>${t('settings.partner2')}</label><input id="s_p2" value="${esc(s.partner2)}"></div>
        <div class="form-group"><label>${t('settings.share1')}</label><input type="number" id="s_sh1" value="${s.share1}"></div>
        <div class="form-group"><label>${t('settings.share2')}</label><input type="number" id="s_sh2" value="${s.share2}"></div>
        <div class="form-group"><label>${t('settings.monthlyGoal')}</label><input type="number" id="s_monthlyGoal" value="${s.monthlyGoal || 0}"></div>
        <div class="form-group"><label>${t('settings.lowStock')}</label><input type="number" id="s_lowStock" value="${s.lowStockThreshold || 5}"></div>
        <div class="form-group"><label>${t('print.tel')}</label><input id="s_sellerPhone" value="${esc(s.sellerPhone || '')}"></div>
        <div class="form-group full"><label>${t('settings.categories')}</label><input id="s_cats" value="${esc(s.expenseCategories.join(', '))}"></div>
      </div>
      <div class="mt-16"><button class="btn btn-primary" onclick="saveSettings()">${t('common.save')}</button></div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${t('settings.backup')}</h3></div>
      <div class="row">
        <button class="btn btn-secondary" onclick="exportFullJSON()">${t('settings.exportBackup')}</button>
        <button class="btn btn-secondary" onclick="document.getElementById('importFile').click()">${t('settings.importBackup')}</button>
        <input type="file" id="importFile" accept="application/json" style="display:none" onchange="importJSON(event)">
        <button class="btn btn-danger" onclick="resetSystem()">${t('settings.reset')}</button>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h3>${t('settings.pin')} ${s.pin ? `<span class="badge badge-success">${t('settings.pinProtected')}</span>` : ''}</h3></div>
      <div class="row">
        <button class="btn btn-secondary" onclick="setPin()">${s.pin ? t('settings.pinRemove') : t('settings.pinSet')}</button>
      </div>
    </div>`;
  document.getElementById('set_lang').value = LANG;
  document.getElementById('set_theme').value = THEME;
  document.getElementById('set_lang').onchange = e => { LANG = e.target.value; localStorage.setItem('ff_lang', LANG); applyLang(); navigate(currentPage); };
  document.getElementById('set_theme').onchange = e => { THEME = e.target.value; localStorage.setItem('ff_theme', THEME); applyTheme(); };
}
function saveSettings() {
  const s = state.settings;
  s.buyPrice = num(document.getElementById('s_buyPrice').value);
  s.sellPrice = num(document.getElementById('s_sellPrice').value);
  s.workerWage = num(document.getElementById('s_workerWage').value);
  s.opCost = num(document.getElementById('s_opCost').value);
  s.partner1 = document.getElementById('s_p1').value.trim();
  s.partner2 = document.getElementById('s_p2').value.trim();
  s.share1 = num(document.getElementById('s_sh1').value);
  s.share2 = num(document.getElementById('s_sh2').value);
  s.monthlyGoal = num(document.getElementById('s_monthlyGoal').value);
  s.lowStockThreshold = num(document.getElementById('s_lowStock').value);
  s.sellerPhone = document.getElementById('s_sellerPhone').value.trim();
  s.expenseCategories = document.getElementById('s_cats').value.split(',').map(x => x.trim()).filter(Boolean);
  state.auditLog.push({ id: uid('log'), date: todayISO(), action: 'settings', details: '' });
  saveState(); toast(t('settings.saved')); updateCashPill();
}

/* ========== Backup ========== */
function exportFullJSON() {
  const data = { ...state, exportedAt: new Date().toISOString(), schema: SCHEMA_VERSION };
  downloadFile('felfel-backup-' + todayISO() + '.json', JSON.stringify(data, null, 2), 'application/json');
  toast(t('toast.saved'));
}
function importJSON(ev) {
  const file = ev.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      if (!data || typeof data !== 'object') throw new Error('bad');
      if (data.schema !== SCHEMA_VERSION) { toast(LANG === 'ar' ? 'إصدار غير متوافق' : 'Version mismatch', 'error'); return; }
      confirmDialog(t('settings.importBackup'), t('confirm.import'), () => {
        const backup = JSON.stringify(state);
        try {
          state = { ...defaultState(), ...data };
          delete state.exportedAt; delete state.schema;
          saveState(); toast(t('toast.saved')); navigate(currentPage);
        } catch(e) { localStorage.setItem('ff_pre_import_backup', backup); toast(t('toast.error'), 'error'); }
      });
    } catch(e) { toast(t('toast.error') + ': ' + e.message, 'error'); }
  };
  reader.readAsText(file); ev.target.value = '';
}
function resetSystem() {
  confirmDialog(t('settings.reset'), t('settings.resetWarn'), () => {
    localStorage.removeItem(STORAGE_KEY);
    state = defaultState(); saveState(); toast(t('toast.deleted')); navigate('dashboard');
  });
}

/* ========== PIN ========== */
function checkPin() {
  if (!state.settings.pin) { document.getElementById('pinLock').classList.add('hidden'); return; }
  document.getElementById('pinLock').classList.remove('hidden');
  const input = document.getElementById('pinInput');
  input.value = '';
  setTimeout(() => input.focus(), 100);
  input.oninput = (e) => {
    if (e.target.value === state.settings.pin) {
      document.getElementById('pinLock').classList.add('hidden');
      document.getElementById('pinError').textContent = '';
    } else if (e.target.value.length >= state.settings.pin.length) {
      document.getElementById('pinError').textContent = t('pin.wrong');
    }
  };
}
function setPin() {
  const current = state.settings.pin;
  const body = current
    ? `<div class="form-group"><label>${t('pin.set')}</label><input type="password" id="pin_new" inputmode="numeric" maxlength="6"></div>
       <button class="btn btn-danger mt-16" onclick="removePin()">${t('settings.pinRemove')}</button>`
    : `<div class="form-group"><label>${t('pin.set')}</label><input type="password" id="pin_new" inputmode="numeric" maxlength="6"></div>`;
  openModal(t('settings.pin'), body + `
    <div class="mt-16"><button class="btn btn-primary" onclick="savePin()">${t('common.save')}</button></div>`,
    `<button class="btn btn-secondary" onclick="closeModal()">${t('common.cancel')}</button>`);
}
function savePin() {
  const v = document.getElementById('pin_new').value.trim();
  if (!v || v.length < 4) { toast(t('toast.invalid'), 'error'); return; }
  state.settings.pin = v;
  saveState(); closeModal(); toast(t('toast.saved')); renderSettings();
}
function removePin() {
  state.settings.pin = '';
  saveState(); closeModal(); toast(t('toast.saved')); renderSettings();
}

/* ========== Command Palette ========== */
const CMD_ITEMS = [
  { id: 'nav.dashboard', k: 'dash', fn: () => navigate('dashboard') },
  { id: 'nav.inventory', k: 'inv', fn: () => navigate('inventory') },
  { id: 'nav.sales', k: 'sale', fn: () => navigate('sales') },
  { id: 'nav.customers', k: 'cust', fn: () => navigate('customers') },
  { id: 'nav.expenses', k: 'exp', fn: () => navigate('expenses') },
  { id: 'nav.cashbox', k: 'cash', fn: () => navigate('cashbox') },
  { id: 'nav.workers', k: 'wrk', fn: () => navigate('workers') },
  { id: 'nav.partners', k: 'prt', fn: () => navigate('partners') },
  { id: 'nav.reports', k: 'rep', fn: () => navigate('reports') },
  { id: 'nav.activity', k: 'act', fn: () => navigate('activity') },
  { id: 'nav.settings', k: 'set', fn: () => navigate('settings') },
  { id: 'cmd.newInvoice', k: 'ni', fn: () => { navigate('sales'); setTimeout(openInvoiceModal, 150); } },
  { id: 'cmd.newBatch', k: 'nb', fn: () => { navigate('inventory'); setTimeout(openBatchModal, 150); } },
  { id: 'cmd.newCustomer', k: 'nc', fn: () => { navigate('customers'); setTimeout(openCustomerModal, 150); } },
  { id: 'cmd.newExpense', k: 'ne', fn: () => { navigate('expenses'); setTimeout(openExpenseModal, 150); } },
  { id: 'cmd.newWorker', k: 'nw', fn: () => { navigate('workers'); setTimeout(openWorkerModal, 150); } },
  { id: 'cmd.backup', k: 'bk', fn: () => exportFullJSON() },
  { id: 'cmd.toggleTheme', k: 'th', fn: () => { THEME = THEME === 'dark' ? 'light' : 'dark'; localStorage.setItem('ff_theme', THEME); applyTheme(); } },
  { id: 'cmd.toggleLang', k: 'lg', fn: () => { LANG = LANG === 'ar' ? 'en' : 'ar'; localStorage.setItem('ff_lang', LANG); applyLang(); navigate(currentPage); } },
];
function openCmdPalette() {
  document.getElementById('cmdPalette').classList.remove('hidden');
  const inp = document.getElementById('cmdInput');
  inp.value = ''; inp.focus();
  renderCmdResults('');
  inp.oninput = e => renderCmdResults(e.target.value);
  inp.onkeydown = e => {
    if (e.key === 'Escape') closeCmdPalette();
    if (e.key === 'Enter') {
      const first = document.querySelector('.cmd-item.active') || document.querySelector('.cmd-item');
      if (first) first.click();
    }
  };
}
function closeCmdPalette() { document.getElementById('cmdPalette').classList.add('hidden'); }
function renderCmdResults(q) {
  const results = document.getElementById('cmdResults');
  const items = CMD_ITEMS.filter(it => {
    const label = t(it.id).toLowerCase();
    return !q || label.includes(q.toLowerCase()) || it.k.includes(q.toLowerCase());
  });
  results.innerHTML = items.map((it, i) =>
    `<div class="cmd-item ${i===0?'active':''}" data-idx="${i}"><span>${esc(t(it.id))}</span></div>`
  ).join('') || `<div class="cmd-item text-muted">${LANG==='ar'?'لا نتائج':'No results'}</div>`;
  results.querySelectorAll('.cmd-item').forEach(el => {
    el.onclick = () => {
      const idx = +el.dataset.idx;
      if (items[idx]) { items[idx].fn(); closeCmdPalette(); }
    };
  });
}

/* ========== Cursor Glow ========== */
function setupCursorGlow() {
  const glow = document.getElementById('cursorGlow');
  if (!glow) return;
  let mx = -200, my = -200, ticking = false;
  window.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        glow.style.transform = `translate3d(${mx - 200}px, ${my - 200}px, 0)`;
        glow.classList.add('visible');
        ticking = false;
      });
    }
  }, { passive: true });
  document.addEventListener('mouseleave', () => glow.classList.remove('visible'));
}

/* ========== Init ========== */
function init() {
  applyLang();
  applyTheme();
  applyAccent(ACCENT);

  document.getElementById('nav').addEventListener('click', e => {
    const btn = e.target.closest('.nav-item');
    if (btn) { Sound.click(); navigate(btn.dataset.page); }
  });
  document.getElementById('langBtn').onclick = () => {
    LANG = LANG === 'ar' ? 'en' : 'ar';
    localStorage.setItem('ff_lang', LANG);
    applyLang(); navigate(currentPage);
  };
  document.getElementById('themeBtn').onclick = () => {
    THEME = THEME === 'dark' ? 'light' : 'dark';
    localStorage.setItem('ff_theme', THEME);
    applyTheme();
  };
  document.getElementById('menuBtn').onclick = () => document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('modalClose').onclick = closeModal;
  document.getElementById('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeModal(); });
  document.getElementById('cmdBtn').onclick = openCmdPalette;
  document.getElementById('cmdPalette').addEventListener('click', e => { if (e.target.id === 'cmdPalette') closeCmdPalette(); });
  document.getElementById('profitCalcBtn').onclick = openProfitCalc;

  const stBtn = document.getElementById('soundToggle');
  stBtn.onclick = () => {
    SOUND_ON = !SOUND_ON;
    localStorage.setItem('ff_sound', SOUND_ON ? 'on' : 'off');
    stBtn.textContent = SOUND_ON ? '🔊' : '🔇';
    if (SOUND_ON) Sound.click();
  };
  stBtn.textContent = SOUND_ON ? '🔊' : '🔇';

  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (document.getElementById('cmdPalette').classList.contains('hidden')) openCmdPalette();
      else closeCmdPalette();
    }
    if (e.key === 'Escape') { closeModal(); closeCmdPalette(); }
  });

  setupCursorGlow();
  checkPin();
  navigate('dashboard');

  setTimeout(() => {
    const s = document.getElementById('splash');
    if (s) { s.classList.add('hide'); setTimeout(() => s.remove(), 600); }
  }, 800);
}

/* ========== Window Exposures ========== */
window.navigate = navigate;
window.closeModal = closeModal;
window.openModal = openModal;
window.confirmDialog = confirmDialog;
window.openBatchModal = openBatchModal;
window.saveBatch = saveBatch;
window.deleteBatch = deleteBatch;
window.openAdjustBatch = openAdjustBatch;
window.saveAdjustBatch = saveAdjustBatch;
window.openInvoiceModal = openInvoiceModal;
window.addInvoiceLine = addInvoiceLine;
window.saveInvoice = saveInvoice;
window.openEditInvoice = openEditInvoice;
window.saveEditInvoice = saveEditInvoice;
window.cancelInvoice = cancelInvoice;
window.openCollectModal = openCollectModal;
window.saveCollect = saveCollect;
window.printInvoice = printInvoice;
window.repeatInvoice = repeatInvoice;
window.openCustomerModal = openCustomerModal;
window.saveCustomer = saveCustomer;
window.deleteCustomer = deleteCustomer;
window.openStatement = openStatement;
window.openExpenseModal = openExpenseModal;
window.saveExpense = saveExpense;
window.deleteExpense = deleteExpense;
window.openOpeningCashModal = openOpeningCashModal;
window.saveOpeningCash = saveOpeningCash;
window.openCashMovementModal = openCashMovementModal;
window.saveCashMovement = saveCashMovement;
window.deleteCashMovement = deleteCashMovement;
window.openWorkerModal = openWorkerModal;
window.saveWorker = saveWorker;
window.deleteWorker = deleteWorker;
window.openPayWorker = openPayWorker;
window.savePayWorker = savePayWorker;
window.openWithdraw = openWithdraw;
window.saveWithdraw = saveWithdraw;
window.deleteDrawing = deleteDrawing;
window.runReports = runReports;
window.exportTableCSV = exportTableCSV;
window.exportTableExcel = exportTableExcel;
window.saveSettings = saveSettings;
window.exportFullJSON = exportFullJSON;
window.importJSON = importJSON;
window.resetSystem = resetSystem;
window.renderSettings = renderSettings;
window.applyAccent = applyAccent;
window.openProfitCalc = openProfitCalc;
window.switchCalcTab = switchCalcTab;
window.calcProfit = calcProfit;
window.calcSuggestedPrice = calcSuggestedPrice;
window.renderActivity = renderActivity;
window.setPin = setPin;
window.savePin = savePin;
window.removePin = removePin;
window.renderAlertsBar = renderAlertsBar;
window.renderDashboardCharts = renderDashboardCharts;

document.addEventListener('DOMContentLoaded', init);