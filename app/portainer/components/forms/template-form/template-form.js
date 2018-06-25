angular.module('portainer.app').component('templateForm', {
  templateUrl: 'app/portainer/components/forms/template-form/templateForm.html',
  controller: function() {
    this.state = {
      collapseTemplate: false,
      collapseContainer: false,
      collapseEnv: false
    };

    this.addPortBinding = function() {
      this.model.Ports.push({ hostPort: '', containerPort: '', protocol: 'tcp' });
    };

    this.removePortBinding = function(index) {
      this.model.Ports.splice(index, 1);
    };

    this.addVolume = function () {
      this.model.Volumes.push({ containerPath: '', name: '', readOnly: false, type: 'auto' });
    };

    this.removeVolume = function(index) {
      this.model.Volumes.splice(index, 1);
    };

    this.addLabel = function () {
      this.model.Labels.push({ name: '', value: ''});
    };

    this.removeLabel = function(index) {
      this.model.Labels.splice(index, 1);
    };

    this.addEnvVar = function() {
      this.model.Env.push({ name: '', label: '', description: '', set: '', setVal: false, freeVal: true, select: [] });
    };

    this.removeEnvVar = function(index) {
      this.model.Env.splice(index, 1);
    };
  },
  bindings: {
    model: '=',
    categories: '<',
    networks: '<',
    formAction: '<',
    formActionLabel: '@',
    actionInProgress: '<'
  }
});
