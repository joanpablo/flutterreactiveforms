import { Component } from '@angular/core';
import { FeatureHighlight } from '@docs/models/FeatureHighlight';

@Component({
  selector: 'app-feature-highlight-list',
  templateUrl: './feature-highlight-list.component.html',
  styleUrls: ['./feature-highlight-list.component.scss'],
})
export class FeatureHighlightListComponent {
  featureHighlights: FeatureHighlight[] = [
    {
      id: 0,
      title: $localize`Easy & clean`,
      description: $localize`Clean separation between views and models. Maintenance of data synchronization in a two-way binding mechanism. Just declare your models and link them to your widgets.`,
      code:
        '/// Model definition\n' +
        'const formGroup = FormGroup({\n' +
        "  'email': FormControl<String>(),\n" +
        "  'password': FormControl<String>(),\n" +
        '});\n\n\n' +
        '/// UI widget\n' +
        'ReactiveFormBuilder(\n' +
        '  form: () => formGroup,\n' +
        '  builder: (context, form, child) {\n' +
        '    /// children widgets...\n' +
        '  },\n' +
        '),',
    },
    {
      id: 1,
      title: $localize`Transparent validation`,
      description: $localize`Validations occur transparently. Declare your models and specify the validators you need. Handle the validity of the entire Form and show error messages whenever you need it.`,
      code:
        '/// Model definition\n' +
        'const group = fb.group({\n' +
        "  'password': FormControl<String>(\n" +
        '    validators: [\n' +
        '      Validators.required,\n' +
        '      Validators.minLength(8),\n' +
        '    ],\n' +
        '  ),\n' +
        '});\n\n\n' +
        '/// UI widget\n' +
        'ReactiveTextField(\n' +
        "  formControlName: 'password',\n" +
        '  validationMessages: {\n' +
        "    ValidationMessage.required: (e) => 'Required field',\n" +
        "    ValidationMessage.minLength: (e) => 'Weak password',\n" +
        '  },\n' +
        '),',
    },
    {
      id: 3,
      title: $localize`Integrate with any state management library`,
      description: $localize`Whether you use a state management library or manage your states with Stateful Widgets - Reactive Forms has got you covered.`,
      code:
        '/// Model definition\n' +
        'class LoginModel {\n' +
        '  const formGroup = fb.group({\n' +
        "    'password': fb.control('')\n" +
        '  });\n' +
        '}\n\n' +
        '/// UI widget\n' +
        'Provider(\n' +
        '  create: (_) => LoginModel(),\n' +
        '  child: Consumer<LoginModel>(builder(_, model, __) => \n' +
        '    ReactiveForm(\n' +
        '      formGroup: model.formGroup,\n' +
        '      child: /// children widgets...\n' +
        '    ),\n' +
        '  ),\n' +
        '),',
    },
  ];
}
