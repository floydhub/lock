'use strict';

exports.__esModule = true;
exports.default = {
  error: {
    forgotPassword: {
      too_many_requests:
        'Sie haben das Limit für die Rücksetzung des Passworts erreicht. Bitte warten Sie, bevor Sie es erneut versuchen.',
      'lock.fallback': 'Beim Zurücksetzen des Passworts ist ein Fehler aufgetreten.'
    },
    login: {
      blocked_user: 'Der Benutzer wird blockiert.',
      invalid_user_password: 'Falsche Anmeldeinformationen.',
      'lock.fallback': 'Beim Verarbeiten der Anmeldung ist ein Fehler aufgetreten.',
      'lock.invalid_code': 'Falscher Code.',
      'lock.invalid_email_password': 'Falsche E-Mail oder Passwort.',
      'lock.invalid_username_password': 'Falscher Benutzername oder Passwort.',
      'lock.network': 'Der Server antwortet nicht.<br/>Bitte erneut versuchen.',
      'lock.popup_closed': 'Pop-up-Fenster geschlossen. Versuchen Sie es erneut.',
      'lock.unauthorized': 'Genehmigungen wurden nicht erteilt. Versuchen Sie es erneut.',
      password_change_required:
        'Sie müssen Ihr Passwort ändern, da Sie sich zum ersten Mal anmelden oder das Passwort abgelaufen ist.',
      password_leaked:
        'Sie müssen Ihr Passwort ändern, da Sie sich zum ersten Mal anmelden oder das Passwort abgelaufen ist.',
      too_many_attempts:
        'Ihr Konto wurde nach mehreren aufeinander folgenden Anmeldeversuche gesperrt.',
      'lock.mfa_registration_required':
        'Multi-Faktor-Authentifizierung erforderlich ist, aber Ihr Gerät nicht eingeschrieben. Bitte registrieren sie, bevor er auf.',
      'lock.mfa_invalid_code': 'Falscher Code. Bitte versuche es erneut.',
      session_missing:
        'Konnte nicht Ihre Authentifizierungsanforderung abzuschließen. Bitte versuchen Sie es erneut, nachdem Sie alle geöffneten Dialoge Schließen',
      'hrd.not_matching_email': 'Bitte verwenden Sie Ihre geschäftliche E-Mail anmelden.'
    },
    passwordless: {
      'bad.email': 'Die E-Mail ist ungültig',
      'bad.phone_number': 'Die Telefonnummer ist ungültig',
      'lock.fallback': 'Es tut uns leid. Etwas ist schief gegangen.'
    },
    signUp: {
      invalid_password: 'Passwort ist ungültig.',
      'lock.fallback': 'Beim Verarbeiten der Registrierung ist ein Fehler aufgetreten.',
      password_dictionary_error: 'Das Passwort ist zu allgemein.',
      password_no_user_info_error: 'Passwort basiert auf Benutzerinformationen.',
      password_strength_error: 'Passwort ist nicht sicher genug.',
      user_exists: 'Der Nutzer existiert bereits.',
      username_exists: 'Der Nutzername wird bereits verwendet.'
    }
  },
  success: {
    logIn: 'Danke für die Anmeldung.',
    forgotPassword: 'Sie haben eine E-Mail erhalten, um Ihr Passwort zurückzusetzen.',
    magicLink: 'Wir senden Ihnen einen Link zu anmelden<br/> um %s.',
    signUp: "Danke für's Registrieren."
  },
  blankErrorHint: 'Kann nicht leer sein',
  codeInputPlaceholder: 'dein Code',
  databaseEnterpriseLoginInstructions: '',
  databaseEnterpriseAlternativeLoginInstructions: 'oder',
  databaseSignUpInstructions: '',
  databaseAlternativeSignUpInstructions: 'oder',
  emailInputPlaceholder: 'yours@example.com',
  enterpriseLoginIntructions: 'Einloggen mit Ihrem Firmenanmeldeinformationen.',
  enterpriseActiveLoginInstructions:
    'Bitte geben Sie Ihre Unternehmensanmeldeinformationen bei %s.',
  failedLabel: 'Gescheitert!',
  forgotPasswordAction: 'Passwort vergessen?',
  forgotPasswordInstructions:
    'Geben Sie bitte Ihre Email-Adresse ein. Wir werden Ihnen eine E-Mail senden um Ihr Passwort zurücksetzen zu können.',
  forgotPasswordSubmitLabel: 'E-Mail senden',
  invalidErrorHint: 'Ungültig',
  lastLoginInstructions: 'Letztes Mal waren Sie angemeldet mit',
  loginAtLabel: 'Anmelden bei %s',
  loginLabel: 'Anmelden',
  loginSubmitLabel: 'Anmelden',
  loginWithLabel: 'Anmelden mit %s',
  notYourAccountAction: 'Falscher Account?',
  passwordInputPlaceholder: 'Ihr Passwort',
  passwordStrength: {
    containsAtLeast: 'Enthält mindestens %d der folgenden %d Arten der Zeichen:',
    identicalChars: 'Nicht mehr als %d identische Zeichen in Folge (z. B. "%s" ist nicht erlaubt)',
    nonEmpty: 'Das Passwort darf nicht leer sein',
    numbers: 'Zahlen (z. B. 0-9)',
    lengthAtLeast: 'Muss mindestens %d Zeichen lang sein',
    lowerCase: 'Kleinbuchstaben (a-z)',
    shouldContain: 'Sollte enthalten:',
    specialCharacters: 'Sonderzeichen (z. B. !@#$%^&*)',
    upperCase: 'Großbuchstaben (A-Z)'
  },
  passwordlessEmailAlternativeInstructions:
    'Andernfalls geben Sie Ihre E-Mail in<br>anmelden oder ein Konto erstellen',
  passwordlessEmailCodeInstructions: 'Eine E-Mail mit dem Code wurde %s gesendet.',
  passwordlessEmailInstructions:
    'Geben Sie einfach Ihre E-Mail in<br>anmelden oder ein Konto erstellen',
  passwordlessSMSAlternativeInstructions:
    'Andernfalls geben Sie Ihre Telefon in<br>anmelden oder ein Konto erstellen',
  passwordlessSMSCodeInstructions: 'Eine SMS mit dem Code wurde<br>%s gesendet.',
  passwordlessSMSInstructions:
    'Geben Sie Ihre Telefonnummer in<br>anmelden oder ein Konto erstellen',
  phoneNumberInputPlaceholder: 'deine Telefonnummer',
  resendCodeAction: 'Haben Sie nicht den Code bekommen?',
  resendLabel: 'Erneut senden',
  resendingLabel: 'Erneutes Senden...',
  retryLabel: 'Wiederholen',
  sentLabel: 'Senden',
  signUpLabel: 'Registrieren',
  signUpSubmitLabel: 'Registrieren',
  signUpTerms: '',
  signUpWithLabel: 'Registrieren mit %s',
  socialLoginInstructions: '',
  socialSignUpInstructions: '',
  ssoEnabled: 'Single Sign-On aktiviert',
  submitLabel: 'Einreichen',
  unrecoverableError:
    'Etwas ist schief gelaufen.<br />Bitte kontaktieren Sie den technischen Support.',
  usernameFormatErrorHint:
    'Verwenden Sie %d-%d Buchstaben, Zahlen und die folgenden Zeichen: "_", ".", "+", "-"',
  usernameInputPlaceholder: 'dein Benutzername',
  usernameOrEmailInputPlaceholder: 'Benutzername/E-Mail',
  title: 'Auth0',
  welcome: 'Willkommen %s!',
  windowsAuthInstructions: 'Sie sind über Ihr Firmennetzwerk verbunden&hellip;',
  windowsAuthLabel: 'Windows Authentication',
  forgotPasswordTitle: 'Setze dein Passwort zurück',
  signupTitle: 'Anmelden',
  mfaInputPlaceholder: 'Code',
  mfaLoginTitle: '2-Step Verification',
  mfaLoginInstructions:
    'Bitte geben Sie den Bestätigungscode ein, indem Sie Ihre mobile Anwendung erzeugt.',
  mfaSubmitLabel: 'Einloggen',
  mfaCodeErrorHint: 'Verwenden %d Zahlen',
  showPassword: 'Passwort anzeigen'
};
