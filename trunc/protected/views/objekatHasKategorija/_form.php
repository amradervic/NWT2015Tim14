<?php
/* @var $this ObjekatHasKategorijaController */
/* @var $model ObjekatHasKategorija */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'objekat-has-kategorija-form',
	// Please note: When you enable ajax validation, make sure the corresponding
	// controller action is handling ajax validation correctly.
	// There is a call to performAjaxValidation() commented in generated controller code.
	// See class documentation of CActiveForm for details on this.
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'Objekat_idObjekat'); ?>
		<?php echo $form->textField($model,'Objekat_idObjekat'); ?>
		<?php echo $form->error($model,'Objekat_idObjekat'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'Kategorija_idKategorija'); ?>
		<?php echo $form->textField($model,'Kategorija_idKategorija'); ?>
		<?php echo $form->error($model,'Kategorija_idKategorija'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->