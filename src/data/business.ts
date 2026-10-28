// Locale-independent business facts for the GCatcode landing and legal pages.
// Translated copy lives in the dictionaries; these values are injected into it.

export const business = {
  brand: "GCatcode",
  legalName: "Jorge Osvaldo Perez Mendoza",
  location: "Zapopan, Jalisco, México",
  email: "contacto@gcatcode.com",
  phoneDisplay: "+52 (33) 2173 9884",
  // International format without symbols, as wa.me expects it.
  whatsappNumber: "523321739884",
  hourlyRateMxn: 500,
  // The hourly rate covers sessions up to this size; larger groups are quoted (ADR-0004).
  advisoryMaxAttendees: 3,
  freeCallMinutes: 30,
  // Advisory booking rules (ADR-0005).
  depositPercent: 25,
  lateRescheduleTopUpPercent: 50,
  rescheduleNoticeHours: 42,
  maxEarlyReschedules: 4,
  maxLateReschedules: 2,
  noShowRescheduleBusinessDays: 5,
  overtimeGraceMinutes: 25,
  cycleBusinessDays: 10,
  cycleWeeks: 2,
  warrantyDays: 30,
  // Static websites (ADR-0015): first-project promotion and deposit; above
  // twice the minimum, the minimum deposit is enough.
  staticPromoMxn: 1500,
  staticDepositPercent: 50,
  staticMinDepositMxn: 1000,
  // Project pause and source retention (ADR-0010).
  pauseRetentionMonths: 6,
  cancellationRetentionMonths: 3,
  // Personal data retention (ADR-0013); 5 years matches CFF art. 30.
  leadRetentionMonths: 12,
  clientRetentionYears: 5,
} as const;

// ISO date of the last revision of the terms and the privacy notice; the
// human-readable date lives in each dictionary (`legal.updatedDate`).
export const legalLastUpdated = "2026-10-27";

// WhatsApp click-to-chat link with a prefilled message.
export function whatsappUrl(message: string): string {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const mailtoUrl = `mailto:${business.email}`;

// Values every business dictionary string may reference as `{placeholder}`.
export const businessPlaceholders = {
  brand: business.brand,
  name: business.legalName,
  location: business.location,
  email: business.email,
  phone: business.phoneDisplay,
  rate: business.hourlyRateMxn,
  attendees: business.advisoryMaxAttendees,
  minutes: business.freeCallMinutes,
  deposit: business.depositPercent,
  lateTopUp: business.lateRescheduleTopUpPercent,
  noticeHours: business.rescheduleNoticeHours,
  maxEarlyReschedules: business.maxEarlyReschedules,
  maxLateReschedules: business.maxLateReschedules,
  noShowDays: business.noShowRescheduleBusinessDays,
  graceMinutes: business.overtimeGraceMinutes,
  pauseMonths: business.pauseRetentionMonths,
  retentionMonths: business.cancellationRetentionMonths,
  leadMonths: business.leadRetentionMonths,
  clientYears: business.clientRetentionYears,
  cycleDays: business.cycleBusinessDays,
  cycleWeeks: business.cycleWeeks,
  warrantyDays: business.warrantyDays,
  staticPromo: business.staticPromoMxn.toLocaleString("en-US"),
  staticDeposit: business.staticDepositPercent,
  staticMinDeposit: business.staticMinDepositMxn.toLocaleString("en-US"),
  staticMinDepositFrom: (business.staticMinDepositMxn * 2).toLocaleString("en-US"),
} as const;
