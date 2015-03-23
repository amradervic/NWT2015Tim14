<?php
/* @var $this OcjenaController */
/* @var $model Ocjena */
/* @var $form CActiveForm */
?>

<div class="form">

<?php $form=$this->beginWidget('CActiveForm', array(
	'id'=>'ocjena-form',
	// Please note: When you enable ajax validation, make sure the corresponding
	// controller action is handling ajax validation correctly.
	// There is a call to performAjaxValidation() commented in generated controller code.
	// See class documentation of CActiveForm for details on this.
	'enableAjaxValidation'=>false,
)); ?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div class="row">
		<?php echo $form->labelEx($model,'vrijednost'); ?>
		<?php echo $form->textField($model,'vrijednost'); ?>
		<?php echo $form->error($model,'vrijednost'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'Objekat_idObjekat'); ?>
		<?php echo $form->textField($model,'Objekat_idObjekat'); ?>
		<?php echo $form->error($model,'Objekat_idObjekat'); ?>
	</div>

	<div class="row">
		<?php echo $form->labelEx($model,'Korisnici_idKorisnik'); ?>
		<?php echo $form->textField($model,'Korisnici_idKorisnik',array('size'=>60,'maxlength'=>128)); ?>
		<?php echo $form->error($model,'Korisnici_idKorisnik'); ?>
	</div>

	<div class="row buttons">
		<?php echo CHtml::submitButton($model->isNewRecord ? 'Create' : 'Save'); ?>
	</div>

<?php $this->endWidget(); ?>

</div><!-- form -->